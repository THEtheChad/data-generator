const loremIpsum = require('lorem-ipsum');

module.exports = function (opts = { units: 'sentences', count: 1 }) {
  // {
  //   count: 1                      // Number of words, sentences, or paragraphs to generate. 
  //   , units: 'sentences'            // Generate words, sentences, or paragraphs. 
  //   , sentenceLowerBound: 5         // Minimum words per sentence. 
  //   , sentenceUpperBound: 15        // Maximum words per sentence. 
  // }
  return loremIpsum(opts);
};