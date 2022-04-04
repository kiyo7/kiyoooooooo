//lib
import { keyframes } from 'styled-components';

export const Screen = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

export const LogoSpin = keyframes`
0% {
    transform:translate(0, 0) rotate(-10deg);
  }
  50% {
    transform:translate(0, -20px) rotate(0deg);
  }
  100% {
    transform:translate(0, 0) rotate(10deg);
  }`;

export const RoupInf = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);

  }
  100% {
    transform: rotate(360deg);
  }`;

export const Slide = keyframes`
from {
 transform: translateX(200px);
 opacity: 0;
}
to {
  transform: translateX(0px)
  opacity: 1;
}`;

export const Trans = keyframes`
from {
  opacity:0;
};
to {
  opacity:1;

}`;

export const Roup = keyframes`
0% {
  transform: perspective(400px) rotate3d(1,1,0,0deg)
}
 100% {
  transform: perspective(400px) rotate3d(1,1,5,360deg)
 }`;

export const FadeIn = keyframes`
from {
  transform: translateY(-20px);

}
to {
  transform: translateY(0)
}`;
