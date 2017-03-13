const Song = require('./../song');

class SongHelpers {
  parseFiles(directory, filetypes = ['.mp3', '.m4a']) {
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
}

module.exports = new SongHelpers();
