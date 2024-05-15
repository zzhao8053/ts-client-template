import asyncToast from './async.toast';
import { BaseToast } from './base.toast';

function success(content: string) {
  BaseToast.success(content);
}

function error(content?: string) {
  BaseToast.fail(content || '服务不可用');
}

function loading(content?: string) {
  BaseToast.loading(content || '加载中...');
}

function CustomToast() {}
CustomToast.success = success;
CustomToast.error = error;
CustomToast.loading = loading;
CustomToast.async = asyncToast;

export default CustomToast;
