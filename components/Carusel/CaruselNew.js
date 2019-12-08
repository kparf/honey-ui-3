import useStoreon from 'storeon/react'
import { useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carusel__Slide from './CaruselNew__Slide';


const Carusel = ({ property }) => {
  const slideList = useStoreon(property)[property];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  console.log(slideList);

  return (
    <>
      <Carousel className="Carusel" activeIndex={index} direction={direction} onSelect={handleSelect}>
        {
          slideList ? slideList.map( (slide, i) => <Carusel__Slide active={i === index} key={ i } property={ property } value={ slide }/>) : false
        }
      </Carousel>

      <style jsx>{`
        .Carusel {
          --carusel-height: 500px;
          --carusel-delay: 5s;
          width: 100%;
          height: var(--carusel-height);
          position: relative;
        }

      `}</style>

      <style jsx global>{`
        .Carusel {
          height: 500px;
        }
        .carousel-item {
          height: 500px;
        }
        body[mv-mode="edit"] .Carusel__list {
          transform: none;
          transition: none;
          display: flex;
          height: unset;
          flex-direction: column;
        }

        body[mv-mode="edit"] .Carusel {
          height: unset;
        }
      `}</style>
    </>
  );
};

export default Carusel;