# Hashtagifier
NPM package that takes text and turns it into a hashtag.

This is really just an exercise in creating an NPM package.

# Set up
```bash
npm i hashtagifier
```

# Use
Takes a string, strips it of non-alphanumeric characters and returns a hashtag.

```javascript
const hashtagifier = require('hashtagifier');

hashtagifier('fizz buzz');
// should return '#fizzbuzz'

hashtagifier(0123456789);
// should throw 'Parameter is not a string!'
```

# Author
**Ezra Mizrahi**

Check it out [here](https://www.npmjs.com/package/hashtagifier).
