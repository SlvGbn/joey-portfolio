import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk&family=Hanken+Grotesk&family=Schibsted+Grotesk&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}