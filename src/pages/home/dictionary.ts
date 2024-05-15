import { IStatistic } from '@/types/statistic';

export const STATISTICS_DATA: {
  field: keyof IStatistic;
  value: number;
  label: string;
  prefix: string;
}[] = [
  { field: 'schoolCount', value: 0, label: '校园\n警队', prefix: '所' },
  { field: 'junaCount', value: 0, label: '少警\n人数', prefix: '人' },
];

export const MEDIA_DATA = [
  {
    path: '/police-force/classroom',
    image: require('@/assets/images/home-sjkt.png'),
    label: '少警课堂',
  },
  {
    path: '/',
    image: require('@/assets/images/home-jrjd.png'),
    label: '加入\n少年警队',
  },
  {
    path: '/',
    image: require('@/assets/images/home-wok.png'),
    label: '争当\n安全宣推官',
  },
  {
    path: '/police-force/classroom/style',
    image: require('@/assets/images/home-sjfc.png'),
    label: '少警风采',
  },
];
