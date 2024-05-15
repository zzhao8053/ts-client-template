import { useSearchParams } from '@umijs/max';
import { Button } from 'antd-mobile';
import React, { useMemo } from 'react';
import { history } from 'umi';
import styles from './style.less';

const PageNeedLogin: React.FC = () => {
  const [searchParams] = useSearchParams();
  const siteId = searchParams.get('siteId');
  const url = useMemo(() => {
    if (siteId) {
      return `/site/${siteId}/portal/home`;
    }
    return '/';
  }, [siteId]);
  return (
    <div className={styles.container}>
      <img
        className="my-5"
        src="https://yfb-cjcc.oss-cn-shanghai.aliyuncs.com/static/exception/502.svg"
      />
      <div className={styles.title}>未登录</div>
      <div className={styles.description}>
        <span>未登录授权</span>
        <p>请点击下方按钮去登录</p>
      </div>
      <Button shape="rounded" onClick={() => history.replace(url)}>
        返回首页
      </Button>
    </div>
  );
};

export default PageNeedLogin;
