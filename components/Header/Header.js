import useStoreon from 'storeon/react'
import Navigation from '../Navigation/Navigation';
import Header__Information from './Header__Information';

const Header = ({ property="header" }) => {

  const { header } = useStoreon('header');
  const { phone, address, logo } = header;

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
      <Navigation className="Navigation_shift"/>


      <style jsx>{`
        .Header {
          --icon-height: 50px;
          --navigatioin-border-waigth: 40px;

          display: flex;
          flex-direction: column;  
          justify-content: center;
          align-items: center;

          font-weight: bold;
          background-image: radial-gradient(transparent, var(--accent-color)), url('/static/images/header.jpg');
          color: var(--app-main-text-color);
          font-weight: bold;
        }

        .Header .Header__container {
          padding-bottom: 40px;
        }

        .Header__container {
          display: flex;
          width: var(--page-width);
          align-items: center;
          justify-content: space-between;
        }

        .Header_navigation_shift {
          padding-bottom: var(--navigatioin-border-waigth, 40px);
          background-clip: content-box;
        }
      `}</style>
    </header>
  )
}

export default Header;