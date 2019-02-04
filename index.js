module.exports = {
  hashtagifier: function(text) {
    // remove spaces
    let cleanText = text.replace(/ /g,'');
    return `#${cleanText}`;
  }
};
