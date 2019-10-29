import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()

const isAdminMode = () => {
  return 'admin' === publicRuntimeConfig.APP_MODE;
}


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Мёд</title>
          <meta charSet="UTF-8"/>
          <link href="https://fonts.googleapis.com/css?family=Exo+2&display=swap" rel="stylesheet"/>
          {
            isAdminMode() && (
              <>
                <script src="https://get.mavo.io/mavo.es5.min.js"></script>
                <link rel="stylesheet" href="https://get.mavo.io/mavo.css"/>
              </>
            )
          }
        </Head>
        <body mv-app="honey" mv-storage="https://github.com/kparf/honey-data" mv-plugins="cropper markdown">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;