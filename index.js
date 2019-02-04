module.exports = function hashtagifier(text) {
  // remove spaces
  let cleanText = text.replace(/ /g,'');
  return `#${cleanText}`;
};
