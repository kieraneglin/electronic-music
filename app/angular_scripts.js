// Add all NPM package require statements here so the controllers are tidy
// Has added benefit of only loading everything once

const fs = require('fs'),
  jetpack = require('fs-jetpack'),
  os = require('os'),
  path = require('path'),
  mm = require('musicmetadata'),
  dotenv = require('dotenv').config(),
  LastfmAPI = require('lastfmapi');

const Song = require('./classes/song');
const SongHelpers = require('./classes/helpers/song-helpers');

// TODO:  Make this editable.  This is just default dir for testing
const MUSIC_DIR = path.join(os.homedir(), 'Music');

angular.module('electronicMusic').controller('homeCTRL', function ($scope) {

  SongHelpers.parseSongsFromDir(MUSIC_DIR);

  // array = songs.map((song) => {
  //   return new Promise(resolve => {
  //     mm(fs.createReadStream(song.filepath), (err, metadata) => {
  //       console.log(metadata);
  //       resolve(metadata);
  //     });
  //   }).then((metadata) => {
  //     console.log('After MM');
  //   });
  // });
  //
  // Promise.all(array).then(() => {
  //   console.log('DONE');
  // });


  // Promise.all(songs.map(song => new Promise((resolve, reject) => {
  //   mm(fs.createReadStream(song.filepath), (err, metadata) => {
  //     resolve(metadata);
  //   }).then(metadata => {
  //     console.log(metadata);
  //     // Send artist and track info to API,
  //     // should return a Promise that resolves when the API returns a result
  //   }).then(result => {
  //     // apply correct track information, return some value that could be used in the sort step
  //   });
  // })).then(results => {
  //   // results is an array of values returned in the last step above
  //   // sort and display here
  // }).catch(err => {
  //   // handle error here
  // }));
  // let wow = SongHelpers.applyMetadata(songs);
  // console.log(wow);
  $scope.test = 'hello';
});
