export default {
  // $schema: 'https://json.schemastore.org/prettierrc', 对.prettierrc.json的检查
  semi: false, // 声明结尾使用分号(默认true)
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）ab进行缩进（默认false）
  useTabs: false, // 是否使用tab
  singleQuote: true, // 使用单引号（默认false）
  printWidth: 100, // 每行代码长度（默认80）
  trailingComma: 'none', // 多行使用拖尾逗号（默认none）
  endOfLine: 'auto', // 行尾的换行符 :<lf|crlf|cr|auto>
  // 箭头函数参数括号 默认always 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'always'
}
