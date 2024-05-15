import { BaseToast } from './base.toast';

function asyncToast() {}

type Service = (params?: any) => Promise<boolean>;
async function request(
  service: Service,
  message: string,
  options?: { back?: boolean; callback?: () => void },
) {
  const callback = options?.back ? () => history.back() : options?.callback;
  BaseToast.loading(message, callback);
  const result = await service();

  if (result) {
    BaseToast.success(message);
    return result;
  }

  BaseToast.fail(message);
  return result;
}

asyncToast.request = request;

export default asyncToast;
