import useStoreon from 'storeon/react'
import Navigation from '../Navigation/Navigation';
import Header__Information from './Header__Information';

const Header = ({ property="header" }) => {

  const { header } = useStoreon('header');
  const { phone, address } = header;

  return (
    <header className="Header Header_navigation_shift" property={ property }>
      <div className="Header__container">
        <img property="logo" src="https://via.placeholder.com/100.png" />
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
          background-color: var(--accent-color);
          color: var(--app-main-color);
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
      <style jsx global>{`
        .Navigation_shift {
          transform: translateY(var(--navigatioin-border-waigth, 40px));
        }
      `}</style>
    </header>
  )
}

export default Header;