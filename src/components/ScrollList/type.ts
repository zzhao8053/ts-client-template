import { IListResponse } from '@/types';
import { ReactNode } from 'react';

type IScrollService<T> = (params?: any) => Promise<IListResponse<T>>;

export type IScrollListProps<T> = {
  service: IScrollService<T>;
  renderItem: (item: T, index: number) => ReactNode;
  queryParams?: Record<string, string | number>;
  pageSize?: number;
  emptyText?: string;
  loadingText?: string;
  loadedText?: string;
  transformData?: (data: any) => any;
  refresh?: boolean;
};
