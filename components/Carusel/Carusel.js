import { useRef } from 'react';

const Carusel = ({ property }) => {
  const viewRef = useRef(null);
  const listRef = useRef(null);

  return (
    <div className="Carusel">
      <div className="carusel__view" ref={viewRef}>
        <div className="carusel__list" ref={listRef}>
            <div property="slide" className="carusel__slide" mv-multiple>
              <img property="image" className="carusel__slide-image" mv-default="https://via.placeholder.com/200.png" />
              <div className="carusel__slide-text-container">
                <div className="carusel__slide-text-wrapper">
                  <div className="carusel__slide-text">
                    <span property="text" mv-default="текст"></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Carusel;