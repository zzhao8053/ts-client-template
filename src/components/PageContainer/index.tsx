import { IStyle } from '@/types';
import { FC, ReactNode, useMemo } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { styled } from 'styled-components';
import { twMerge } from 'tailwind-merge';
import { NavBar, NavBarProps } from '../NavBar';

export interface IContainerProps extends IStyle {
  children: ReactNode;
  sticky?: boolean;
}

const Wrapper = styled.div.attrs({
  className: 'container bg-white min-h-screen',
})``;

export const PageContainer: FC<IContainerProps & NavBarProps> = ({
  label,
  className,
  sticky,
  children,
}) => {
  const WrapperSticky = useMemo(
    () => (sticky ? StickyContainer : Wrapper),
    [sticky],
  );

  const NavBarNode = sticky ? (
    <Sticky topOffset={250}>
      {({ style, isSticky }) => (
        <header
          style={{ ...style, zIndex: 100 }}
          className={twMerge(
            'bg-white transition-all duration-300 ',
            // TODO: fade-in-top is not working
            isSticky && 'shadow-md  fade-in-top',
          )}
        >
          <NavBar label={label} />
        </header>
      )}
    </Sticky>
  ) : (
    <NavBar label={label} />
  );

  return (
    <WrapperSticky>
      {NavBarNode}
      <main className={twMerge('main px-5 pt-4', className)}>{children}</main>
    </WrapperSticky>
  );
};
