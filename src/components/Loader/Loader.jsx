import { Triangle } from 'react-loader-spinner';
import { StyledLoadingWrapper } from './Loading';

const Loader = () => {
  return (
    <StyledLoadingWrapper>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <p>...Loading</p>
    </StyledLoadingWrapper>
  );
};

export default Loader;
