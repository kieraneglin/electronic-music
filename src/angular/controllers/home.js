const jetpack = require('fs-jetpack');
const Song = require('./classes/song');

angular.module('electronicMusic').controller('homeCTRL', function ($scope) {
  // jetpack.find('foo', { matching: 'bar/*.txt' });
  $scope.test = 'hello';
});
