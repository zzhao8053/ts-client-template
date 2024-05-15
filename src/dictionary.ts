import { envConfig } from '@/utils/env';

export const API_FIX = envConfig([
  { env: 'local', value: '/api' },
  { env: 'dev', value: '' },
  { env: 'prod', value: '' },
]);

export const TAB_BAR_LIST = [
  {
    label: '首页',
    icon: require('@/assets/icons/home-inactive.svg').default,
    selectedIcon: require('@/assets/icons/home-active.svg').default,
    path: '/home/index',
    name: 'home',
  },
  {
    label: '个人中心',
    icon: require('@/assets/icons/profile-inactive.svg').default,
    selectedIcon: require('@/assets/icons/profile-active.svg').default,
    path: '/home/profile',
    name: 'profile',
  },
];
