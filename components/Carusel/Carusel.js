import useStoreon from 'storeon/react'
import { useRef } from 'react';
import Carusel__Slide from './Carusel__Slide';

const Carusel = ({ property }) => {

  const viewRef = useRef(null);
  const listRef = useRef(null);
  const slideList = useStoreon(property)[property];

  return (
    <div className="Carusel">
      <div className="Carusel__view" ref={viewRef}>
        <div className="Carusel__List" ref={listRef}>
          {
            slideList ? slideList.map( (slide, index) => <Carusel__Slide key={ index } property={ property } value={ slide }/>) : false
          }
        </div>
      </div>

      <style jsx>{`
        .Carusel {
          --carusel-height: 500px;
          --carusel-delay: 5s;
          width: 100%;
          height: var(--carusel-height);
          position: relative;
        }

        .Carusel__view {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .Carusel__list {
          --shift: 0;
          transform: translateX(var(--shift));
          display: flex;
          min-width: 100%;
          width: fit-content;
          height: var(--carusel-height);
          transition: transform 4s;
          transition-delay: var(--carusel-delay);
        }
      `}</style>

      <style jsx global>{`
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
    </div>
  );
};

export default Carusel;