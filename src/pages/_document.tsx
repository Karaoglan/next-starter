import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />

        <script
          dangerouslySetInnerHTML={{
            __html:
              `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
              `new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],` +
              `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
              `'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);` +
              `})(window,document,'script','dataLayer','GTM-MLZPWTZ');`,
          }}
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-MLZPWTZ' height='0' width='0' style='display:none;visibility:hidden' />`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**
 script async src="https://www.googletagmanager.com/gtag/js?id=G-9DCXWVL804"></script>
 <script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'G-9DCXWVL804');
 </script>
 */
