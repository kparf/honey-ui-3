import Head from 'next/head'

const Layout = ({ children }) => (
  <div mv-app="honey" mv-storage="https://github.com/kparf/honey-data" mv-plugins="cropper">
    <Head>
      <title>Мёд</title>
      <meta charset="UTF-8"/>
      <script src="https://get.mavo.io/mavo.es5.min.js"></script>
      <link rel="stylesheet" href="https://get.mavo.io/mavo.css"/>
      <link href="https://fonts.googleapis.com/css?family=Exo+2&display=swap" rel="stylesheet"/>
    </Head>
    { children }


    <style jsx global>{`
      :root {
        --page-width: 960px;

        --app-main-color: #000;
        --second-color: #fff;
        --accent-color: #fbd303f0;
        --decoration-color: #000;
        --base-background: white;
        --second-background: #000;

        --carusel-text-width: 960px;
        --carusel-text-color: #000;
      }

      body {
        margin: 0;
        min-height: 100vh;
        font-family: 'Exo 2', sans-serif;
        background-image: radial-gradient(transparent, var(--base-background)), url('/static/images/beautiful-bee-bloom-1591478.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
    `}
    </style>
  </div>
)

export default Layout