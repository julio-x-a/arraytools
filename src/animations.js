const spinning = [
  { transform: 'rotate(-360deg)', opacity: 0 },
  { transform: 'rotate(0)', opacity: 1 }
];

const slideBlurred = [
  {
    transform: 'translateY(-1000px) scaleY(2.5) scaleX(0.2)',
    'transform-origin': '50% 0%',
    filter: 'blur(40px)',
    opacity: 0
  },
  {
    transform: 'translateY(0) scaleY(1) scaleX(1)',
    'transform-origin': '50% 50%',
    filter: 'blur(0)',
    opacity: 1
  }
];

const wobbleHorBottom = [
  {
    transform: 'translateX(0%)',
    'transform-origin': '50% 50%'
  },
  {
    transform: 'translateX(-30px) rotate(-6deg)',
    offset: 0.15
  },
  {
    transform: 'translateX(15px) rotate(6deg)',
    offset: 0.3
  },
  {
    transform: 'translateX(-15px) rotate(-3.6deg)',
    offset: 0.45
  },
  {
    transform: 'translateX(9px) rotate(2.4deg)',
    offset: 0.6
  },
  {
    transform: 'translateX(-6px) rotate(-1.2deg)',
    offset: 0.75
  }
];

export default {
  spinning,
  slideBlurred,
  wobbleHorBottom
};
