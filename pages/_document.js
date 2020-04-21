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
          <title>Пчёлка</title>
          <meta charSet="UTF-8"/>
          <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700&display=swap&subset=cyrillic" rel="stylesheet"></link>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
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