import { defineConfig } from '@umijs/max';
import dayjs from 'dayjs';
import defaultSetting from '../src/defaultSetting';
import { envConfig, PUBLIC_PATH, PUBLIC_PATH_STR } from '../src/utils/env';
import routes from './routes.config';

const proxy = envConfig<any>([
  {
    env: 'local',
    value: {
      '/api': {
        target: '/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  {
    env: 'dev',
    value: {},
  },
  {
    env: 'prod',
    value: {},
  },
]);

export default defineConfig({
  hash: true,
  base: PUBLIC_PATH,
  publicPath: PUBLIC_PATH,
  cssPublicPath: PUBLIC_PATH,
  routes,
  targets: {
    ie: 9,
  },
  antd: {
    dark: false,
    theme: {
      token: {
        colorPrimary: '#2A317E',
      },
    },
  },
  define: {
    VERSION: defaultSetting.version,
    BUILD: dayjs().format('YYYYMMDDHHmm'),
    TITLE: defaultSetting.title,
  },
  clientLoader: {},
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  title: defaultSetting.title,
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  npmClient: 'pnpm',
  dva: {},
  headScripts: [{ src: `${PUBLIC_PATH_STR}/scripts/loading.js`, async: true }],
  favicons: [`${PUBLIC_PATH_STR}/favicon.ico`],
  proxy,
  styledComponents: {},
  tailwindcss: {},
});
