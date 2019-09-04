import Navigation__Item from './Navigation__Item';

const Navigation = () => (
  <nav className="Navigation">
    <ul className="Navigation__list">
      <li>
        <Navigation__Item href="/" label="Главная"/>
      </li>
      <li>
        <Navigation__Item href="/products" label="Продукция"/>
      </li>
      <li>
        <Navigation__Item href="/about" label="О Нас"/>
      </li>
      <li>
        <Navigation__Item href="/contacts" label="Контакты"/>
      </li>
    </ul>


    <style jsx>{`
      .Navigation__list {
        display: flex;
        width: var(--page-width);
        list-style: none;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-top: 30px; 
      }
    `}</style>
  </nav>
);

export default Navigation;