const hashtagifier = require('../hashtagifier');
const expect = require('chai').expect;

describe('#hashtagifier()', function() {

  const cleanString = '#fizzbuzz';

  context('with non-string arguments', function() {
    it('should throw error', function() {
      expect(function() {
        hashtagifier(1)
      }).to.throw(TypeError, 'hashtagifier() expects only strings.')
    })
  })

})
