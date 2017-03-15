module.exports = class Song {
  constructor() {
    this.name = '';
    this.filepath = '';
    this.metadata = null;
  }

  mergeApiData(api) {
    this.name = api.name || this.nameFromFilepath();
    this.artist = api.artist.name || 'Unknown Artist';
    this.album = api.album.title || 'Unknown Album';
  }

  // If the lastFM API fails to find data, default to metadata info
  mergeMetadata() {
    this.name = this.metadata.title || this.nameFromFilepath();
    this.artist = this.metadata.artist[0] || 'Unknown Artist';
    this.album = this.metadata.albumartist[0] || 'Unknown Album';
  }

  nameFromFilepath() {
    return path.basename(this.filepath).slice(0, -4);
  }

  // To get album image
  // api.album.image[
  //   Object.keys(api.album.image)[Object.keys(api.album.image).length - 1]
  // ]["#text"]
};
