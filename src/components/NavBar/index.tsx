import { IStyle } from '@/types';
import { history } from '@umijs/max';
import { styled } from 'styled-components';

const NavBarWrapper = styled.div.attrs({
  className: 'navbar bg-base-100 border-b-4 border-indigo-500 shadow-sm',
})``;

const NavBarButton = styled.button.attrs({
  className: 'btn btn-ghost px-1',
  type: 'button',
  children: (
    <svg
      className="h-8 w-8 fill-current md:h-8 md:w-8"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
    </svg>
  ),
})``;

const NavBarLabel = styled.p.attrs({
  className:
    'block font-bold text-base-content text-xl text-[#1F1F39] truncate',
})``;

export interface NavBarProps extends IStyle {
  label: string;
}

export function NavBar(props: NavBarProps) {
  const { label, style, className } = props;
  return (
    <NavBarWrapper className={className} style={style}>
      <NavBarButton onClick={history.back} />
      <NavBarLabel>{label}</NavBarLabel>
    </NavBarWrapper>
  );
}
