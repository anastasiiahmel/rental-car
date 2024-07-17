import videoCars from '..//..//..//assets/videoCars.mp4';
import {
  BgVideo,
  ContainerVideoInform,
  Btn,
  Item,
  Title,
} from './VideoBg.styled';

import { useEffect, useRef } from 'react';

const VideoBg = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <BgVideo ref={videoRef} width="100%" muted loop autoPlay>
        <source src={videoCars} type="video/mp4" />
      </BgVideo>
      <ContainerVideoInform>
        <Title>Go to a free life!</Title>
        <Item>And we will help you choose the right wheels </Item>
        <Btn to={'/catalog'}>Order a car</Btn>
      </ContainerVideoInform>
    </>
  );
};

export default VideoBg;
