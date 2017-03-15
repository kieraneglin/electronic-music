const Song = require('./../song');

class SongHelpers {
  parseSongsFromDir(directory) {
    let songList = this.createSongArray(directory);

    let songPromiseChain = songList.map(song => {
      return new Promise((resolve, reject) => {
        this.applyMetadata(song).then(() => {
          console.log('after');
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

  applyMetadata(song, resolve) {
    return new Promise(resolve => {
      mm(fs.createReadStream(song.filepath), (err, metadata) => {
        console.log(metadata);
        resolve(metadata);
      });
    });
  }
}

module.exports = new SongHelpers();
