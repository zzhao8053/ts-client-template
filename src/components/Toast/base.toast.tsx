import { Toast } from 'antd-mobile';

Toast.config({ duration: 1500, position: 'center', maskClickable: true });

export class BaseToast {
  static loading(text?: string, callback?: () => void) {
    Toast.show({
      content: text || '加载中...',
      icon: 'loading',
      afterClose: callback,
    });
  }

  static success(text: string, callback?: () => void) {
    Toast.show({
      content: text,
      icon: 'success',
      afterClose: callback,
    });
  }

  static fail(text: string, callback?: () => void) {
    Toast.show({
      content: text,
      icon: 'fail',
      afterClose: callback,
    });
  }
}
