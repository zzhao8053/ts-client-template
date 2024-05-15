import {
  AnyObject,
  HTTP_STATUS,
  IDataListResponse,
  IListResponse,
  IPaginationList,
} from '@/types';
import { useCreation, useUpdateEffect } from 'ahooks';
import { merge } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Paginator } from './Paginator';

type ServiceResponse<T> = IListResponse<T> | IDataListResponse<T>;
type Service<T> = (
  params?: { page: number; pageSize: number } & AnyObject,
) => Promise<ServiceResponse<T>>;

interface Options<T> {
  service: Service<T>;
  pageSize?: number;
  defaultParams?: AnyObject;
  dependencies?: any[];
}
export function useScrollList<T>(options: Options<T>) {
  const { service, defaultParams, dependencies = [] } = options;
  const paginator = useCreation(
    () => new Paginator(options?.pageSize || 10),
    [options?.pageSize],
  );
  const [list, setList] = useState<T[]>([]);
  const [ref, inView] = useInView({
    threshold: 1,
    delay: 500,
  });

  const loadData = useCallback(async () => {
    const params = merge(
      { pageSize: options.pageSize || 10 },
      options.defaultParams || {},
      paginator.getParams(),
      ...dependencies,
    );
    const response = await service(params);
    if (Array.isArray(response.data) && response?.pagination) {
      const { total, page, totalPages } = response.pagination;
      paginator.setTotal(total);
      paginator.setCurrentPage(page);
      paginator.setHasMore(page !== totalPages);
      setList([...list, ...response.data]);
    } else {
      const { total, currentPage, lastPage, data } =
        response.data as IPaginationList<any>;
      paginator.setTotal(total);
      paginator.setCurrentPage(currentPage);
      paginator.setHasMore(currentPage !== lastPage);
      setList([...list, ...data]);
    }
    paginator.next();
    return response.code === HTTP_STATUS.SUCCESS;
  }, [service, defaultParams, paginator, list]);

  const refresh = () => {
    setList([]);
    paginator.reset();
    paginator.setHasMore(true);
  };

  const asyncRefresh = async () => {
    setList([]);
    paginator.reset();
    paginator.setHasMore(true);
  };

  useEffect(() => {
    if (inView) {
      loadData().then(console.log).catch(console.error);
    }
  }, [inView]);

  useUpdateEffect(refresh, dependencies);

  return {
    ref,
    inView,
    list,
    hasMore: paginator.getHasMore(),
    reset: () => {
      setList([]);
      paginator.reset();
    },
    refresh,
    asyncRefresh,
  };
}
