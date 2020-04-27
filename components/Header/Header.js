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
          background-size: cover;
          color: var(--app-main-text-color);
          font-weight: bold;
        }

        @media(max-width: 1100px) {
          .Header {
            background-image: radial-gradient(transparent, var(--accent-color)), url('/static/images/header-1100px-90q.jpg');
          }
        }

        @media(max-width: 500px) {
          .Header {
            background-image: radial-gradient(transparent, var(--accent-color)), url('/static/images/header-500px-90q.jpg');
          }
        }

        .Header .Header__container {
          padding-bottom: 40px;
        }

        .Header__container {
          display: flex;
          padding: 1em;
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