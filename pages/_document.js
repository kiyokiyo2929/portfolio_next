import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="/favicon.png"/>
          </Head>
          <body>
            <Main />
            <NextScript />
            <style jsx global>{`
            #__next {
              width: 100vw;
            }
          `}</style>
          </body>
        </Html>
      )
    }
  }
