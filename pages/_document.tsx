import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
        <Head>
            <title>MarvelXCodes</title>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Coding Blogs" />
            <link type='image/' href='/logo1024.png' rel='icon' />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}