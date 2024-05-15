import { ResolvedReturnType } from '@/types';
import { Container, HeaderContainer, ViewContainer } from './components';

type ClientLoaderData = ResolvedReturnType<typeof clientLoader>;

export async function clientLoader() {}

export default function Page() {
  return (
    <Container>
      <ViewContainer>
        <HeaderContainer>
          <div>Hello world</div>
        </HeaderContainer>
      </ViewContainer>
    </Container>
  );
}
