import { useRef } from 'react';
import classnames from 'classnames';
import Navigation__Item from './Navigation__Item';


const Navigation = ({ className }) => {

  const wrapper = useRef(null);

  const hoverHandler = () => {
    if (wrapper.current) {
      wrapper.current.classList.add("Navigation__wrapper_dried");
    }
  }

  const unHoverHandler = () => {
    if (wrapper.current) {
      wrapper.current.classList.remove("Navigation__wrapper_dried");
    }
  }

  return (
    <div className={classnames("Navigation__wrapper", className)} ref={wrapper}>
      <nav className="Navigation">
        <ul className="Navigation__list">
          <li>
            <Navigation__Item
              onMouseEnter={hoverHandler}
              onMouseLeave={unHoverHandler}
              href="/" label="Главная"/>
          </li>
          <li>
            <Navigation__Item
              onMouseEnter={hoverHandler}
              onMouseLeave={unHoverHandler}
              href="/products" label="Продукция"/>
          </li>
          <li>
            <Navigation__Item
              onMouseEnter={hoverHandler}
              onMouseLeave={unHoverHandler}
              href="/about" label="О Нас"/>
          </li>
          <li>
            <Navigation__Item
              onMouseEnter={hoverHandler}
              onMouseLeave={unHoverHandler}
              href="/contacts" label="Контакты"/>
          </li>
        </ul>
      </nav>
  
      <style jsx>{`
          .Navigation {
            background-color: inherit;
          }

          .Navigation__wrapper:before {
            content: '';
            width: 100%;
            height: 2px;
            background-color: inherit;

            border-width: 40px;
            border-style: solid none none none;
            border-image: url('/static/images/cell-6.png') 50;
            border-image-repeat: space;
            background-clip: padding-box;
            margin-top: -40px;
            transition: all 0.5s;
            transform: translateY(1px);
          }

          .Navigation__wrapper:after {
            content: '';
            width: 100%;
            background-color: inherit;

            border-width: 40px;
            border-style: none none solid none;
            border-image: url('/static/images/cell-6.png') 50;
            border-image-repeat: space;
            background-clip: padding-box;
            margin-bottom: -40px;
            transition: all 0.5s;
            transform: translateY(-1px);
          }

          .Navigation__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #FF9500;

            background-clip: content-box;
            width: 100%;
            box-sizing: border-box;
            height: 70px;
            justify-content: center;
          }

          .Navigation__wrapper_dried:after, .Navigation__wrapper_dried:before  {
            border-width: 0;
            margin: 0;
          }
  
          .Navigation__list {
            display: flex;
            width: var(--page-width);
            list-style: none;
            justify-content: center;
            align-items: center;
            padding: 20px;
            margin: 0;
          }

          @keyframes hoverItem {
            0% {
              border-width: 40px;
            }
          }
        `}</style>
    </div>
  );
}

export default Navigation;