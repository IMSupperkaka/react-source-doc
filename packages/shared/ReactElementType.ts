
/**
 * 目前没找到定义的地方
 */
type React$Element<T> = any

export type Source = {
  fileName: string,
  lineNumber: number,
};

export type ReactElement = {
  $$typeof: any,
  type: any,
  key: any,
  ref: any,
  props: any,
  // ReactFiber
  _owner: any,

  // __DEV__
  _store: {validated: boolean},
  _self: React$Element<any>,
  _shadowChildren: any,
  _source: Source,
};