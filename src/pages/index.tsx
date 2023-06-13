/* eslint-disable */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
  	<Layout>
       <header><!-- And the header section, not much to say about that other than your logo, tagline, 
    search, share etc. can go in there, many times it is used as a constant heading for every page 
    which seems like a good fit. -->

    <nav>
    <!-- Why not add the NAV element first? It could come after the header or inside might be 
    acceptable, but for now we'll ensure it is outside of the main content where it should be. -->
    <a href="/">Home</a>
    <a href="/another-page">Another Page</a>
    </nav>
   <h1 itemprop="name">Delightful HTML5 Example Page
    <!-- You should always have one of these, and only one is best! The other sizes are there for 
    a reason (structure!). Also there is a good chance this or the title will appear in search 
    results so make it good!-->
    </h1>

    </header>
    
    <main itemscope itemprop="mainEntity" itemtype="http://schema.org/Blog">

    <!-- The article has now been defined as the mainEntity of the page
    The main entity of the page can be used to describe its contents by adding a Schema.org type.
    I have chosen to define a blog with 2 articles in it. None of this schema.org markup is required, 
    but the embedded html style as exhibited here is widely supported. -->

 <h2 itemprop="name">Some text to describe the main contents, the name of the blog in this case</h2>
       
        <article itemscope itemprop="blogPost" itemtype="http://schema.org/BlogPosting">
            <header>
                    <h3 itemprop="headline">This article's heading.</h3>
                   <a itemprop="author" rel="author" href="link-to-profile">Name Of Author</a>
                   <span itemprop="datePublished" content="2015-10-19 12:09 pm">2015-10-19 12:09 pm</span>
                   <!-- Articles can have their own headers and footers as well, this seems like a fine 
                    place to add rel authorship markup. There should be a links between the author page 
                    and the G+ profile with rel="me" on the author page... -->
            </header>
            <div itemprop="articleBody">
                <img itemprop="image" src="" alt="..."/>
                <p>Super Article, <a href="">Related link</a>, if the link is related to the webPage
                then there is schema.org markup that could be added https://schema.org/relatedLink </p>
            </div>
        </article>

        <article itemscope itemprop="blogPost" itemtype="http://schema.org/BlogPosting">
            <h3 itemprop="headline">2nd article's heading.</h3>
            <img itemprop="image" src="" alt="Don't forget me!"/>
            <a itemprop="url" href="...">A link to this article</a>
            
            <footer>
                <h4>Published: </h4>
                <time datetime="2010-07-03" itemprop="datePublished">Jul 3, 2010</time>
                By: <a itemprop="author" rel="author" href="link-to-profile">Name Of Author</a>
            </footer>
        </article>

    </main>
    
    <section>
        <h2>Every section should have a heading</h2>
    Related or important stuff.
    </section>
    
    <aside>
    <h4>Even aside should have a heading</h4>
    Much less or unrelated to page.
    </aside>
    <footer>
    Last call for stuff!
    </footer>
    </Layout>
  );
}
