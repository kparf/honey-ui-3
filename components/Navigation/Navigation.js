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
          <Navigation__Item
            href="/" label="Главная"/>
          <Navigation__Item
            href="/products" label="Продукция"/>
          <Navigation__Item
            href="/about" label="Пасека"/>
          <Navigation__Item
            href="/delivery-and-payment"
            label="Доставка и оплата"/>
          <Navigation__Item
            href="/blog"
            label="Блог"
          />
          <Navigation__Item
            href="/contacts"
            label="Контакты"
          />
        </ul>
      </nav>
  
      <style jsx>{`
          .Navigation__wrapper {
            --navigation-height: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #ff9500c4;

            background-clip: content-box;
            width: 100%;
            box-sizing: border-box;
            min-height: var(--navigation-height, 70px);
            justify-content: center;
            border-bottom: 4px solid var(--second-color);
            
          }

          .Navigation {
            min-height: var(--navigation-height, 70px);
          }
  
          .Navigation__list {
            display: flex;
            flex-wrap: wrap;
            min-height: var(--navigation-height, 70px);
            width: var(--page-width);
            list-style: none;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
          }

        `}</style>
    </div>
  );
}

export default Navigation;