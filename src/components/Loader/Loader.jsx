
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';


export const Loader = () => {
  return (
    <LoaderWrapper>
     <ThreeCircles
  height="100"
  width="100"
  color="#B0C4DE	"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
      />
      </LoaderWrapper>
  );
};