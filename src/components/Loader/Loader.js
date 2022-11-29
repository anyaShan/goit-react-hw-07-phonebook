import { RotatingLines } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        strokeColor="#b6b5b5 "
        strokeWidth="5"
        animationDuration="0.6"
        width="50"
        visible={true}
      />
    </LoaderWrap>
  );
};
