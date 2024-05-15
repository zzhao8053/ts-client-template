import { IResponse } from '@/types/response';
import { CSSProperties } from 'react';

export type ResolvedReturnType<T extends (...args: any) => any> =
  ReturnType<T> extends Promise<infer R> ? R : ReturnType<T>;
export type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type IAsyncValue<T> = T | Promise<T>;

export type IAsyncValueWithMeta<T> = {
  value: IAsyncValue<T>;
  meta: any;
};

export interface IStyle {
  className?: string;
  style?: CSSProperties;
}

export interface IRoute {
  path: string;
  name?: string;
  title?: string;
  component?: any;
  exact?: boolean;
  routes?: IRoute[];
  wrappers?: string[];
  __toMerge?: boolean;
  __isDynamic?: boolean;
}

export type IPattern = 'url' | 'media';

export type ILabeledValue<T> = {
  label: string;
  value: T;
  [key: string]: any;
};

export type IAreaItem = {
  id: number;
  text: string;
};
export type IAreaListResponse = IResponse<IAreaItem[]>;

export type IPaginationList<T> = {
  currentPage: number;
  data: T[];
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  links: any[];
  nextPageUrl: string;
  path: string;
  perPage: string;
  prevPageUrl: string;
  to: number;
  total: number;
};
export type IListResponse<T> = IResponse<IPaginationList<T>>;

export type IDataListResponse<T> = IResponse<T[]>;

export type AnyObject = Record<PropertyKey, any>;

export type Media = {
  disk: string;
  duration: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  id: number;
  mimeType: 'video/mp4';
  notifyBack: null;
  preview: string;
  rectSize: string;
  savePath: string;
  status: string;
  url: string;
};
