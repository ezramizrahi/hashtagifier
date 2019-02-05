module.exports = function hashtagifier(string) {

  // function to check if parameter is a string
  function isString(obj) {
    return (Object.prototype.toString.call(obj) === '[object String]');
  }

  if (isString(string)) {
    // remove all non-alphanumeric characters
    let cleanString = string.replace(/[^A-Za-z0-9]/g,'');
    return `#${cleanString}`;
  } else {
    throw "Parameter is not a string!";
  }

};
