import { Button, Result } from 'antd-mobile';
import React from 'react';
import { history } from 'umi';

import styles from './style.less';

const ThemePageNotFound: React.FC = () => (
  <div className={styles.container}>
    <Result status="info" title="未设置主题页面" description="点击按钮返回上一页" />
    <Button color="primary" onClick={() => history.push('/')} block>
      返回首页
    </Button>
  </div>
);

export default ThemePageNotFound;
