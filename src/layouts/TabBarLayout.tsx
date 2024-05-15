import { TAB_BAR_LIST } from '@/dictionary';
import { history, Outlet, useLocation } from '@umijs/max';
import { TabBar } from './TabBarLayout.component';

export default function TabBarLayout() {
  const { pathname } = useLocation();
  const tabBarHandle = (path: string) => {
    if (path !== pathname) {
      history.push(path);
    }
  };

  return (
    <div className="container">
      <Outlet />
      <TabBar
        items={TAB_BAR_LIST}
        defaultActive={pathname}
        onChange={tabBarHandle}
      />
    </div>
  );
}
