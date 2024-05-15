export default [
  {
    path: '/',
    redirect: '/home/index',
  },
  {
    component: '404',
    path: '/*',
  },
  {
    name: 'index',
    path: '/home',
    component: '@/layouts/TabBarLayout',
    routes: [
      {
        path: '/home',
        redirect: '/home/index',
      },
      {
        name: 'index',
        path: '/home/index',
        component: '@/pages/home',
        title: '首页',
      },
    ],
  },
  {
    path: '/auth',
    routes: [
      {
        path: '/auth/login',
        component: '@/pages/auth/login',
        title: '登录',
      },
      {
        path: '/auth/register',
        component: '@/pages/auth/register',
        title: '注册',
      },
      {
        path: '/auth/forget-pwd',
        component: '@/pages/auth/forget-pwd',
        title: '忘记密码',
      },
    ],
  },
  {
    path: '/test',
    component: '@/pages/test',
    title: '测试页面',
  },
];
