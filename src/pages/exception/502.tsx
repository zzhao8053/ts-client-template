import { Button } from 'antd-mobile';
import React from 'react';
import { history } from 'umi';

import styles from './style.less';

const NetworkTimeOut: React.FC = () => (
  <div className={styles.container}>
    <img
      className="my-5"
      src="https://yfb-cjcc.oss-cn-shanghai.aliyuncs.com/static/exception/502.svg"
    />
    <div className={styles.title}>连接超时</div>
    <div className={styles.description}>
      <span>页面连接超时</span>
      <p>请点击下方按钮对页面进行刷新</p>
    </div>
    <Button shape="rounded" onClick={() => history.go(-1)}>
      刷新
    </Button>
  </div>
);

export default NetworkTimeOut;
