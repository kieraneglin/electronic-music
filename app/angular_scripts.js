// Add all NPM package require statements here so the controllers are tidy
// Has added benefit of only loading everything once

const jetpack = require('fs-jetpack');
const os = require('os');
const path = require('path');

const Song = require('./classes/song');
const SongHelpers = require('./classes/helpers/song-helpers');

// TODO:  Make this editable.  This is just default dir for testing
const MUSIC_DIR = path.join(os.homedir(), 'Music');

angular.module('electronicMusic').controller('homeCTRL', function ($scope) {

  console.log(SongHelpers.parseFiles(MUSIC_DIR));
  $scope.test = 'hello';
});
