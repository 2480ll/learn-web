import variables from '@/styles/global.module.scss'
// import variables from '@/styles/variables.scss'
export const useDesign = () => {
  const scssVariables = variables
  /**
   * layout类似组件
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getPrefixCls = (scope: string) => {
    return `${scssVariables.namespace}-${scope}`
  }
  /**
   * layout类似组件
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getComCls = (scope: string) => {
    return `${scssVariables.components}-${scope}`
  }
  /**
   * 普通组件
   * @param scope 类名
   * @returns 返回类名-空间名（后缀）
   */
  const getSuffixCls = (scope: string) => {
    return `${scope}-main`
  }
  return { variables: scssVariables, getPrefixCls, getSuffixCls, getComCls }
}
