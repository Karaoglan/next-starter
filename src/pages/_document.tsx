import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      
      <Head>
         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


    <meta name=viewport content="width=device-width, initial-scale=1" />

    <script defer src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>


    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />

    <title>Basic HTML5 Webpage Example</title>

    <meta name="description" content="An example of a basic seo friendly html5 web page." />
    <meta name="keywords" content="Website Design Tips, HTML5, SEO" />

    <link href="https://plus.google.com/110695574125259754582" rel="publisher" />

    <meta property="fb:admins" content="1419362191" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Basic HTML5 Webpage Example" />
    <meta property="og:description" content="An example of a basic seo friendly html5 web page." />
    <meta property="og:url" content="www.siteraiser.com/" />
    <meta property="og:image" content="http://www.siteraiser.com/images/image-for-page.jpg" />
    <meta property="og:width" content="1106" />
    <meta property="og:height" content="553" />
        
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
