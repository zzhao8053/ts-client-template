import { styled } from '@@/exports';

const LogoImage = styled.img.attrs({
  className: 'w-44',
})``;

export const Logo = () => {
  return (
    <LogoImage src={require('@/assets/images/home-jcsn.png')} alt="Logo" />
  );
};
