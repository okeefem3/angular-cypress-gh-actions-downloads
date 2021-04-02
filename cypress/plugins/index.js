const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, _config) => {
  on('file:preprocessor', cucumber({
    ...browserify.defaultOptions,
    typescript: require('resolve').sync('typescript'),
  }));
};
