import Carousel from 'react-bootstrap/Carousel';
import classnames from 'classnames';


const CaruselNew__Slide = ({ active, value, property = "slide", imageProperty = "image", textProperty="text" }) => (

  <Carousel.Item className={classnames({ active })} property={property} mv-multiple="true">
    <img property={ imageProperty }
        className="Carusel__slide-image"
        mv-default="https://via.placeholder.com/200.png"
        src={value[imageProperty]}
        />
    <div className="Carusel__slide-text-container">
      <div className="Carusel__slide-text-wrapper">
        <div className="Carusel__slide-text">
          <span property={ textProperty } mv-default="текст">{ value[textProperty] }</span>
        </div>
      </div>
    </div>

    <style jsx>{`
      .Carusel__slide {
        position: relative;
        width: 100%;
        height: var(--carusel-height);
        flex-basis: 100%;
        flex-shrink: 0;
      }

      .Carusel__slide-image {
        z-index: 50;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      .Carusel__slide-text {
        padding: 10px;
        color: var(--carusel-text-color, black);
        width: fit-content;
        background-color: var(--carusel-text-bg); 
        font-size: var(--carusel-font-size, 3em);
        text-shadow: #fff 2px 2px 10px; 
        font-weight: bold;
      }

      .Carusel__slide-text-wrapper {
        z-index: 100;
        width: var(--carusel-text-width, 100%);
      }

      .Carusel__slide-text-container {
        position: absolute;
        top: 0;
        margin: auto auto;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

    `}</style>
    <style jsx global>{`
      body[mv-mode="edit"] .Carusel__slide-text-container {
        width: unset;
        height: unset;
        display: block;
        justify-content: unset;
        align-items: unset;
      }
    `}</style>
  </Carousel.Item>
)

export default CaruselNew__Slide;