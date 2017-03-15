const Song = require('./../song');

class SongHelpers {
  parseSongsFromDir(directory) {
    let songList = this.createSongArray(directory);
    let lastfm = this.lastFmObject();

    let songPromiseChain = songList.map(song => {
      return new Promise((resolve, reject) => {
        this.applyMetadata(song).then((song) => {
          return this.fetchApiData(song, lastfm);
        }).then((song) => {
          console.log(song);
          resolve();
        });
      });
    });

    Promise.all(songPromiseChain).then(() => {
      console.log('DONE');
    });
  }

  createSongArray(directory, filetypes = ['.mp3', '.m4a']) {
    let songs = [];

    let songlist = jetpack.find(directory, {
      matching: `**/*[${filetypes}]`
    });

    songlist.forEach((song) => {
      let s = new Song();
      s.filepath = song;
      songs.push(s);
    });

    return songs;
  }

  fetchApiData(song, lastfm) {
    return new Promise(resolve => {
      if (song.metadata) {
        lastfm.track.getInfo({
          'artist': song.metadata.artist[0],
          'track': song.metadata.title
        }, (err, track) => {
          if (!err) {
            song.mergeApiData(track);
          } else if (err && err.error === 6) {
            song.mergeMetadata();
          }

          resolve(song);
        });
      }
    });
  }

  applyMetadata(song, resolve) {
    return new Promise(resolve => {
      mm(fs.createReadStream(song.filepath), (err, metadata) => {
        song.metadata = metadata;
        resolve(song);
      });
    });
  }

  lastFmObject() {
    return new LastfmAPI({
      'api_key': process.env.LASTFM_API_KEY,
      'secret': process.env.LASTFM_SHARED_SECRET
    });
  }
}

module.exports = new SongHelpers();
