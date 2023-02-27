const path = require('path');
const pak = require('../package.json');

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    // presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json', 'less'],
          alias: {
            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '..', pak.source),
            '@lrn/lrn-app-components': '..',
          },
        },
      ],
      ['react-native-classname-to-style'],
      [
        'react-native-platform-specific-extensions',
        {
          extensions: ['less'],
        },
      ],
    ],
  };
};
