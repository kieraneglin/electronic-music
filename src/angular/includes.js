// Add all NPM package require statements here so the controllers are tidy
// Has added benefit of only loading everything once

const fs = require('fs'),
  jetpack = require('fs-jetpack'),
  os = require('os'),
  path = require('path'),
  mm = require('musicmetadata'),
  dotenv = require('dotenv').config(),
  LastfmAPI = require('lastfmapi');
