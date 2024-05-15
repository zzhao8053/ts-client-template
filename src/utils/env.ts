type Env = 'prod' | 'dev' | 'local';
type EnvValue<T> = { env: Env; value: T }[];

const PUBLIC_PATHS: EnvValue<string> = [
  { env: 'local', value: '/' },
  { env: 'dev', value: '/app/juna-client-dev/' },
  { env: 'prod', value: '/app/juna-client/' },
];

export function envConfig<T>(value: EnvValue<any>): T {
  return value.find((i) => i.env === process.env.UMI_ENV)?.value;
}

export const PUBLIC_PATH = envConfig<string>(PUBLIC_PATHS);

export const PUBLIC_PATH_STR = PUBLIC_PATH
  ? PUBLIC_PATH.substring(0, PUBLIC_PATH.length - 1)
  : '/';

export const IS_PROD = process.env.UMI_ENV === 'prod';

export const IS_DEV = process.env.UMI_ENV === 'dev';

export const IS_LOCAL = process.env.UMI_ENV === 'local';
