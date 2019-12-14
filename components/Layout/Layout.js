import ApplicationMode from '../../contexts/ApplicationMode';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()


const Layout = ({ children }) => (
  <ApplicationMode.Provider value={ publicRuntimeConfig.APP_MODE }>

    { children }

    <style jsx global>{`
      :root {
        --page-width: 1060px;

        --app-main-color: #542d18;
        --second-color: #fff;
        --accent-color: #fbd303f0;
        --decoration-color: #000;
        --base-background: white;
        --second-background: #000;

        --carusel-text-width: 960px;
        --carusel-text-color: var(--app-main-text-color);
        --carusel-text-bg: transparent;

        --app-main-text-color: #542d18;
        --form-background: var(--app-main-color);
      }

      body {
        margin: 0;
        min-height: 100vh;
        font-family: 'Exo 2', sans-serif;
        background-image: radial-gradient(transparent, var(--base-background)), url('/static/images/beautiful-bee-bloom-1591478.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        color: var(--app-main-text-color);
      }

      @media (max-width: 1100px) {
        :root {
          --page-width: 100%;
        }
      }
    `}
    </style>
  </ApplicationMode.Provider>
)

export default Layout