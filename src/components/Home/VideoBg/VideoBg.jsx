
import videoBg from "..//..//..//assets/video_bg.mp4";
import { BgVideo, ContainerVideoInform, Btn, Item, Title } from "./VideoBg.styled";

function Video() {
  return (
      <>
        <BgVideo
          muted
          loop
          src={videoBg}
          autoPlay
          >
        </BgVideo> 
      <ContainerVideoInform>
      <Title >Go to a free life!</Title>
      <Item>And we will help you choose the right wheels </Item>
      <Btn  to={'/catalog'}>Order a car</Btn>
      </ContainerVideoInform>
      </>
  )
};
export default Video;