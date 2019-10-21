import useStoreon from 'storeon/react'
import Navigation from '../Navigation/Navigation';
import Header__Information from './Header__Information';

const Header = ({ property="header" }) => {

  const { header } = useStoreon('header');
  const { phone, address, logo } = header;

  console.log(header);

  return (
    <header className="Header" property={ property }>
      <div className="Header__container">
        <img
          property="logo"
          mv-default="https://via.placeholder.com/100.png"
          src={logo}
          />
        <Header__Information phone={phone} address={address}/>
      </div>
      <Navigation />


      <style jsx>{`
        .Header {
          --icon-height: 50px;

          display: flex;
          flex-direction: column;  
          justify-content: center;
          align-items: center;

          padding: 10px;
          font-weight: bold;
          background-color: var(--accent-color);
          color: var(--app-main-color);
        }

        .Header__container {
          display: flex;
          width: var(--page-width);
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </header>
  )
}

export default Header;