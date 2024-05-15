import { Button } from 'antd-mobile';
import React from 'react';
import { history } from 'umi';
import styles from './style.less';

const PageNotAllow: React.FC = () => {
  // const [searchParams] = useSearchParams();
  // const siteId = searchParams.get('siteId');
  // const url = useMemo(() => {
  //   if (siteId) {
  //     return `/site/${siteId}/portal/home`;
  //   }
  //   return '/';
  // }, [siteId]);
  return (
    <div className={styles.container}>
      <img
        className="my-5"
        src="https://yfb-cjcc.oss-cn-shanghai.aliyuncs.com/static/exception/403.svg"
      />
      <div className={styles.title}>无权限访问</div>
      <div className={styles.description}>
        <span>无权限访问该页面</span>
        <p>请点击下方按钮返回上一页</p>
      </div>
      <Button shape="rounded" onClick={() => history.go(-1)}>
        返回
      </Button>
    </div>
  );
};

export default PageNotAllow;
