import { Button, Result } from 'antd-mobile';
import React from 'react';
import { history } from 'umi';

import styles from './style.less';

const NetworkTimeOut: React.FC = () => (
  <div className={styles.container}>
    <Result status="info" title="好像网络不太行" description="点击按钮刷新页面" />
    <Button color="primary" onClick={() => history.back()} block>
      刷新
    </Button>
  </div>
);

export default NetworkTimeOut;
