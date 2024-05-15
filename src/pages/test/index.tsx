import { PageContainer } from '@/components/PageContainer';
import { history } from '@umijs/max';
import { List } from 'antd-mobile';

export default function TestPage() {
  return (
    <PageContainer label="Pages">
      <List>
        <List.Item onClick={() => history.push('/auth/login')}>
          auth/login
        </List.Item>
      </List>
    </PageContainer>
  );
}
