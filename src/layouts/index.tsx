import { Helmet, Outlet, useLocation, useModel } from '@umijs/max';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { useMemo } from 'react';

const { Content } = Layout;

export default function BasicLayout() {
  const location = useLocation();
  const { getRouteTitle } = useModel('useRoutesModel', (model) => model);
  const title = useMemo(
    () => getRouteTitle(location.pathname),
    [location.pathname],
  );

  return (
    <ConfigProvider locale={zhCN}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container m-auto">
        <Layout className="m-0">
          <Content className="min-h-screen">
            <Outlet />
          </Content>
        </Layout>
      </div>
    </ConfigProvider>
  );
}
