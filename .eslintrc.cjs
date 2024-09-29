/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // 其他配置...
  env: {
    node: true, // 告诉 ESLint 代码是在 Node.js 环境下执行的
    browser: true, // 如果你的代码也会在浏览器端执行，也可以添加这个配置
    es6: true
  },
  //https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // 解释了为何使用ts的解析器是在parserOptions里面定义的，而不是用parser
  parser: 'vue-eslint-parser', //Vue的解析器，eslint-plugin-vue本身包含了这个，依赖需要这个解析器，https://github.com/vuejs/vue-eslint-parser#readme 解析器的github,@typescript-eslint/parser这个也在那个网址里
  parserOptions: {
    ecmaVersion: 'latest', //ESLint 解析器使用最新的 ECMAScript 版本来解析代码。这样可以确保 ESLint 能够理解和检查最新版本的 JavaScript 语法特性。
    parser: '@typescript-eslint/parser',
    sourceType: 'module', //告诉 ESLint 使用 ECMAScript 模块语法解析代码
    jsxPragma: 'React', //告诉 ESLint，你的项目中使用的 JSX 语法是为 React 框架编写的。这样 ESLint 就能够正确地识别和检查 JSX 中的语法问题，例如检查未使用的变量或者 JSX 中的语法错误。
    // .如果您使用的是JSX，则需要在ESLint配置中启用JSX。
    ecmaFeatures: {
      jsx: true
    }
  },
  // 启用插件
  plugins: ['html'],
  // 加载和扩展已有的配置；扩展规则集
  extends: [
    //下面这两个引入了 Vue.js 官方提供的针对 Vue 3 的基本 ESLint 规则集。它确保了 Vue 组件的基本语法和最佳实践符合 Vue 3 的要求。
    //  第一个：这是一个更为基本的 ESLint 配置，主要涵盖了一些基本的规则和建议。比较宽松，不会强制执行一些较严格的代码风格规范，适合在项目早期或者对代码规范要求不是特别严格的情况下使用。
    // 第二个：这是 Vue.js 官方推荐的 ESLint 配置，适用于大多数 Vue 3 项目。包含了一组比较全面的 ESLint 规则，覆盖了代码风格、最佳实践以及一些潜在的错误和问题。这个配置更为严格，有助于提高代码质量和一致性，适合需要更严格代码检查的项目。
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended', // ESLint 官方推荐的默认配置集合，包含了通用的 JavaScript 最佳实践和错误检查规则。它适用于所有 JavaScript 代码，无论是 Vue 组件还是普通的 JavaScript 文件。
    'plugin:@typescript-eslint/recommended', // 启用 @typescript-eslint 推荐的规则，为TypeScript 提供支持的 ESLint 插件。它包含了一系列的 ESLint 规则，这些规则可以用来检测 TypeScript 代码中的潜在问题、优化代码结构和风格
    '@vue/eslint-config-typescript', // 提供了适用于 Vue.js 和 TypeScript 结合的 ESLint 规则集，确保你的 TypeScript 代码能够正确地被 ESLint 检查和规范。
    '@vue/eslint-config-prettier/skip-formatting', //这个配置包是 @vue/eslint-config-prettier 的一个子配置，专门用于避免与 Prettier 格式化冲突的 ESLint 规则。
    'prettier', //配置项简单地启用了 Prettier 的规则。
    'plugin:prettier/recommended' //ESLint 插件，用于集成 Prettier 到 ESLint 中，并推荐了与 Prettier 兼容的 ESLint 规则。
  ],
  // "off"或0-关闭规则
  // "warn"或1-将该规则作为警告打开（只警告不退出代码）
  // "error"或2-将规则作为错误打开（触发时退出代码为1，相当于是会阻断）
  rules: {
    //  禁止检查单文件组件中组件名是否符合多单词（vue大驼峰）命名规范。
    'vue/multi-word-component-names': 'off'
  }
  // 用于允许你针对特定的文件、文件夹或 glob 模式，覆盖或修改全局配置中的特定规则
  // overrides: [
  //   {
  //     files: ['*.html'], // 匹配所有以 .test.js 结尾的文件
  //     extends: ['html/eslint-plugin-html/recommended']
  //   }
  // ]
}
