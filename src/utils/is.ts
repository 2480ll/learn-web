const toString = Object.prototype.toString

export const is = (val: unknown, type: string) => {
  return toString.call(val) === `[object ${type}]`
}

export const isString = (val: unknown): val is string => {
  return is(val, 'String')
}

export const isNull = (val: unknown): val is null => {
  return val === null
}
// 是否为undefind
export const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val)
}

// 是否不为undefind
export const isDef = <T = unknown>(val?: T): val is T => {
  return typeof val !== 'undefined'
}
