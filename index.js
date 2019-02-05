module.exports = function hashtagifier(string) {
  // remove all non-alphanumeric characters
  let cleanString = string.replace(/[^A-Za-z0-9]/g,'');
  return `#${cleanString}`;
};
