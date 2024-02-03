import Checkbox from '@mui/material/Checkbox';
import { HeartFill, HeartStroke, IconHeart } from './HeartIcon.styled';


export default function HeartIcon() {

  return (
    <IconHeart>
      <Checkbox
        icon={<HeartStroke />}
        checkedIcon={<HeartFill />}
      />
    </IconHeart>
  );
}