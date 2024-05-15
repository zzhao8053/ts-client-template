import defaultSetting from '@/defaultSetting';
import { IRoute } from '@/types';
import lodash from 'lodash';
import { useState } from 'react';
import routes from '../../config/routes.config';

type IFlattenRoutesType = { path: string; title?: string };

function flattenRoutes(routesData: IRoute[]): Map<string, IFlattenRoutesType> {
  const map: Map<string, IFlattenRoutesType> = new Map();

  const buildFlatten = (data: IRoute[]) => {
    data.map((i) => {
      map.set(i.path, { path: i.path, title: i.title });
      if (Array.isArray(i?.routes)) {
        buildFlatten(i.routes);
      }
      return i;
    });
  };
  buildFlatten(routesData);
  return map;
}

export default function useRoutesModel() {
  const [routesPath] = useState<Map<string, IFlattenRoutesType>>(
    flattenRoutes(routes),
  );

  const getRouteTitle: (pathname: string) => string = (pathname) => {
    return routesPath.get(pathname)?.title
      ? routesPath.get(pathname)?.title + `-${defaultSetting.title}`
      : defaultSetting.title;
  };

  /**
   * 获取路由中一组 patnname 的title
   * 并去重
   */
  const getRouteTitleByArray: (
    pathNames: string[],
  ) => { path: string; title: string }[] = (pathNames) => {
    return lodash.uniqBy(
      pathNames
        .map((i) => ({ path: i, title: getRouteTitle(i) }))
        .filter((i) => i.title),
      'title',
    );
  };

  /**
   * @param pathname 根据 pathname 取定义的路由信息
   */
  const getRoutesArray: (pathname: string) => any = (pathname) => {
    return [...routesPath.values()].find((i) => i.path === pathname);
  };

  return {
    getRouteTitle,
    getRoutesArray,
    getRouteTitleByArray,
  };
}
