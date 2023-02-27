module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // [
    //   'module:react-native-dotenv',
    //   {
    //     envName: 'APP_ENV',
    //     moduleName: '@env',
    //     // 读取环境配置参数
    //     path: '.env'
    //   }
    // ],
    ['react-native-classname-to-style'],
    [
      'react-native-platform-specific-extensions',
      {
        extensions: ['less']
      }
    ]
  ]
}
