import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      
      <Head>
         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!-- search engines like to know what they are dealing with,
    the type should be obvious, but it is best to at least provide
    a character set, it could be a windows format if there are characters
    like quotes that have separate beginning and end characters -->

    <meta name=viewport content="width=device-width, initial-scale=1" />
    <!-- This is one way to set the viewport for mobile devices-->

    <script defer src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- A deferred script that loads JQuery after the page has been loaded,
    it reduces the time to display the content the first time. I am loading it
    from a common cdn in hopes that the visitor already has it cached in their browser.-->

    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <!-- A nice touch in the tab appearing before the title and an SEO consideration,
    this points to the images folder where a few versions of the favicon reside -->

    <title>Basic HTML5 Webpage Example</title>
    <!-- A concise descriptive title that grabs the eye is a winner!
    Then the rest of your usual SEO tags description, and keywords.
    The description is probably more important than the keywords in this
    day and age, but both are good to include none the less.
    -->
    <meta name="description" content="An example of a basic seo friendly html5 web page." />
    <meta name="keywords" content="Website Design Tips, HTML5, SEO" />

    <link href="https://plus.google.com/110695574125259754582" rel="publisher" />
    <!--If you setup a publisher page in G+ then this one way to add the link -->

    <meta property="fb:admins" content="1419362191" />
    <!-- The fb:admins id is used for adding widgets etc. to your site and allows
    others to admin your FB app if you have one setup and their ids have been added-->

    <!-- Below is the open graph markup specifying the info for the page and the required
    image dimensions for the image to be shared at full size the first time. -->
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
