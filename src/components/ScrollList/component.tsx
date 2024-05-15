import { forwardRef } from 'react';
import { styled } from 'styled-components';

const LoadingSpinner = styled.div.attrs({
  className: 'loading loading-spinner loading-xs',
})``;

export const Loading = forwardRef<any>((props, ref) => {
  return (
    <div className="w-full h-10 flex justify-center items-center" ref={ref}>
      <LoadingSpinner />
    </div>
  );
});
