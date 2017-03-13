module.exports = class Song {
  set name(name) {
    if (name) {
      this.name = name;
      return this.name;
    }
    return false;
  }

  get name(){
    return this.name;
  }
};
