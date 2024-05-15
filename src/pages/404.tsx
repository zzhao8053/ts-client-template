import { history } from '@umijs/max';
import React from 'react';
import { styled } from 'styled-components';
import styles from './style.less';

const Container = styled.div.attrs({
  className:
    'container w-full h-screen flex flex-col justify-center items-center p-6 text-center',
})``;

const Button = styled.button.attrs({
  className: 'w-32 h-12 bg-primary text-white font-bold rounded-full mt-5',
})``;

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <img
        className="my-5"
        src={require('@/assets/404.svg').default}
        alt="404"
      />
      <div className={styles.title}>404</div>
      <div className={styles.description}>
        <span>您所访问的页面不存在</span>
        <p>请点击下方按钮对页面进行刷新</p>
      </div>
      <Button onClick={() => history.replace('/')}>刷新</Button>
    </Container>
  );
};

export default PageNotFound;
