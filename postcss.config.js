/**
 * 更改postcss.config.js文件的格式为ES模块，报错解决；
 * 应该还有一种解决方法，不需要更改文件格式，暂时未找到，先放下
 */
// postcss.config.cjs    CommonJS 格式的文件
// module.exports = {
//   syntax: 'postcss-scss',
//   plugins: {

//   }
// }

// postcss.config.js   ES 模块
export default {
  syntax: 'postcss-scss',
  plugins: {}
}
