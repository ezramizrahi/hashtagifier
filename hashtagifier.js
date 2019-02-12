module.exports = function() {

  // function to check if parameter is a string
  function isString(obj) {
    return (Object.prototype.toString.call(obj) === '[object String]');
  }

  if (!isString(arguments)) {
    throw new TypeError('hashtagifier() expects only strings.')
  } else if (isString(arguments)) {
    // remove all non-alphanumeric characters
    let cleanString = string.replace(/[^A-Za-z0-9]/g,'');
    return `#${cleanString}`;
  }

}
