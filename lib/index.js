'use strict';

module.exports = function hashtagifier(string) {

  // function to check if parameter is a string
  function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  }

  if (isString(arguments)) {
    // remove all non-alphanumeric characters
    var cleanString = arguments.replace(/[^A-Za-z0-9]/g, '');
    return '#' + cleanString;
  } else if (!isString(arguments)) {
    throw new TypeError('Sorry, hashtagifier expects only strings!');
  }
};