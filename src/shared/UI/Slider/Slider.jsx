import { Splide } from '@splidejs/react-splide';
import { Slide } from './UI/Slide';

export const Slider = ({ mentorsInfo }) => {
  const options = {
    perPage: 3,
    perMove: 3,
    gap: 30,
    speed: 1000,
    arrows: false,
    breakpoints: {
      1280: {
        perPage: 2,
        perMove: 2,
      },
      767.98: {
        perPage: 1,
        perMove: 1,
      },
    },
  };

  return (
    <Splide options={options}>
      {mentorsInfo.map(({ id, ...mentor }) => (
        <Slide key={id} mentor={mentor} />
      ))}
    </Splide>
  );
};
