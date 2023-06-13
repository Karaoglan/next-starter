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
  <Seo />
  <header data-elementor-type="header" data-elementor-id="21" class="elementor elementor-21 elementor-location-header elementor-motion-effects-parent">
    <div class="elementor-motion-effects-container">
      <div class="elementor-motion-effects-layer" style="width: 100%; height: 100%; opacity: 0.217; will-change: opacity;"></div>
    </div>
    <div class="elementor-background-overlay"></div>
    <div class="elementor-container elementor-column-gap-narrow">
      <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-14eed4be" data-id="14eed4be" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor-element-21f16f95 elementor-widget__width-initial animated-slow elementor-widget-mobile__width-initial elementor-widget elementor-widget-theme-site-logo elementor-widget-image animated fadeInLeft" data-id="21f16f95" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="theme-site-logo.default">
            <div class="elementor-widget-container">
              <a href="https://hanconcept.eu/home/">
                <img width="2048" height="913" src="https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-2048x913.png" class="attachment-2048x2048 size-2048x2048 wp-image-85" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-2048x913.png 2048w, https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-300x134.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-1024x457.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-768x343.png 768w, https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-1536x685.png 1536w" sizes="(max-width: 2048px) 100vw, 2048px" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-66e1bca1" data-id="66e1bca1" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor">
            <div class="elementor-widget-container">
              <link rel="stylesheet" href="https://hanconcept.eu/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css" />
              <nav class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-grow">
                <ul id="menu-1-2104b6e7" class="elementor-nav-menu" data-smartmenus-id="1686646806810156">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-36 current_page_item menu-item-72">
                    <a href="https://hanconcept.eu/" aria-current="page" class="elementor-item elementor-item-active">HOME</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-73">
                    <a href="https://hanconcept.eu/about/" class="elementor-item">ÜBER UNS</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-576">
                    <a href="https://hanconcept.eu/portfolio-2/" class="elementor-item">PORTFOLIO</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                    <a href="https://hanconcept.eu/portfolio/" class="elementor-item">LEISTUNGEN</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                    <a href="https://hanconcept.eu/contact/" class="elementor-item">KONTAKT</a>
                  </li>
                </ul>
              </nav>
              <div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
                </svg>
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                </svg>
                <span class="elementor-screen-only">Menu</span>
              </div>
              <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style="top: 29px; width: 637px; left: -535.156px; --menu-height: 0;">
                <ul id="menu-2-2104b6e7" class="elementor-nav-menu" data-smartmenus-id="1686646806811018">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-36 current_page_item menu-item-72">
                    <a href="https://hanconcept.eu/" aria-current="page" class="elementor-item elementor-item-active" tabindex="-1">HOME</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-73">
                    <a href="https://hanconcept.eu/about/" class="elementor-item" tabindex="-1">ÜBER UNS</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-576">
                    <a href="https://hanconcept.eu/portfolio-2/" class="elementor-item" tabindex="-1">PORTFOLIO</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                    <a href="https://hanconcept.eu/portfolio/" class="elementor-item" tabindex="-1">LEISTUNGEN</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                    <a href="https://hanconcept.eu/contact/" class="elementor-item" tabindex="-1">KONTAKT</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="elementor-element elementor-element-11ccd1a7 elementor-widget__width-auto elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="11ccd1a7" data-element_type="widget" data-widget_type="social-icons.default">
            <div class="elementor-widget-container">
              <div class="elementor-social-icons-wrapper elementor-grid">
                <span class="elementor-grid-item">
                  <a class="elementor-icon elementor-social-icon elementor-social-icon- elementor-repeater-item-f4a39a7" target="_blank">
                    <span class="elementor-screen-only"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" id="bb4dab33-f5ad-4430-baa0-c6a6a45eb2bb" data-name="Layer 1" width="21" height="21" viewBox="0 0 21 21">
                      <path d="M20.9939,10.5965c0-1.5765.0056-3.1532-.0042-4.73a6.2775,6.2775,0,0,0-.0933-1.0773,5.6778,5.6778,0,0,0-1.9436-3.3851A5.5639,5.5639,0,0,0,15.2742.0087C12.1389-.0071,9.0035.0037,5.868.0029A5.5455,5.5455,0,0,0,3.0173.7355,5.6292,5.6292,0,0,0,.0225,5.7646c-.0419,3.1468-.0131,6.2946-.0094,9.442A5.4128,5.4128,0,0,0,.706,17.91,5.63,5.63,0,0,0,5.77,20.9764c3.1551.0451,6.3113.012,9.4671.01a5.4928,5.4928,0,0,0,1.39-.1853,5.8343,5.8343,0,0,0,4.3607-5.5628C21.0111,13.6917,20.9933,12.144,20.9939,10.5965ZM10.4368,16A5.5,5.5,0,1,1,16,10.5,5.5061,5.5061,0,0,1,10.4368,16ZM17,5a1,1,0,1,1,1-1.0024A1.0046,1.0046,0,0,1,17,5Z" transform="translate(0 0)" style="fill-rule:evenodd"></path>
                      <path d="M10.4978,7A3.5,3.5,0,1,0,14,10.4972,3.499,3.499,0,0,0,10.4978,7Z" transform="translate(0 0)" style="fill-rule:evenodd"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <section>
      <div data-elementor-type="wp-page" data-elementor-id="36" class="elementor elementor-36">
        <section class="elementor-section elementor-top-section elementor-element elementor-element-5fb674c3 elementor-section-height-min-height elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="5fb674c3" data-element_type="section">
          <div class="elementor-background-overlay"></div>
          <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-10e5221" data-id="10e5221" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-background-overlay"></div>
                <div class="elementor-element elementor-element-609650e9 animated-slow elementor-widget__width-initial elementor-widget elementor-widget-image animated slideInRight" data-id="609650e9" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInRight&quot;}" data-widget_type="image.default">
                  <div class="elementor-widget-container">
                    <a href="https://hanconcept.eu/wp-content/uploads/2023/03/Apartman-11-scaled.jpg" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="HAN Concept &amp; Design - Home" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTI4LCJ1cmwiOiJodHRwczpcL1wvaGFuY29uY2VwdC5ldVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyM1wvMDNcL0FwYXJ0bWFuLTExLXNjYWxlZC5qcGcifQ%3D%3D">
                      <img decoding="async" src="https://hanconcept.eu/wp-content/uploads/2023/03/Apartman-11-scaled.jpg" title="HAN Concept &amp; Design – Home" alt="HAN Concept &amp; Design - Home" loading="lazy" />
                    </a>
                  </div>
                </div>
                <div class="elementor-element elementor-element-33f6c887 animated-slow elementor-absolute elementor-widget elementor-widget-image animated fadeInRight" data-id="33f6c887" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;,&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                  <div class="elementor-widget-container">
                    <img decoding="async" width="1137" height="576" src="https://hanconcept.eu/wp-content/uploads/2023/03/HomePage-Hero-Cutted.png" class="attachment-full size-full wp-image-37" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/HomePage-Hero-Cutted.png 1137w, https://hanconcept.eu/wp-content/uploads/2023/03/HomePage-Hero-Cutted-300x152.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/HomePage-Hero-Cutted-1024x519.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/HomePage-Hero-Cutted-768x389.png 768w" sizes="(max-width: 1137px) 100vw, 1137px" />
                  </div>
                </div>
                <div class="elementor-element elementor-element-25b3b039 elementor-widget__width-inherit elementor-widget elementor-widget-heading animated fadeInUp" data-id="25b3b039" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h1 class="elementor-heading-title elementor-size-large">
                      <br>The Art of ArchItecture
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-30a7ac5f elementor-section-content-middle elementor-section-full_width elementor-section-height-min-height elementor-section-items-stretch elementor-section-height-default" data-id="30a7ac5f" data-element_type="section">
          <div class="elementor-background-overlay"></div>
          <div class="elementor-container elementor-column-gap-narrow">
            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3707741f" data-id="3707741f" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-99c408e elementor-widget elementor-widget-heading" data-id="99c408e" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-medium">Über uns </h2>
                  </div>
                </div>
                <div class="elementor-element elementor-element-4c37bf56 elementor-widget elementor-widget-text-editor" data-id="4c37bf56" data-element_type="widget" data-widget_type="text-editor.default">
                  <div class="elementor-widget-container">
                    <p>Unser Unternehmen&nbsp; bietet Erfahrung in den Bereichen Architektur und Visualisierung. Unser erfahrenes Team arbeitet an jedem Projekt, um optimal passende Lösungen zu entwickeln und <br>Ergebnisse zu erzielen, die die Erwartungen unserer Kunden übertreffen. </p>
                    <p>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Unser Architektur-Team ist spezialisiert auf innovative <br>Designs und hochwertige Handwerkskunst, um die Träume unserer Kunden zu <br>verwirklichen. Im Bereich der Visualisierung setzen wir Ihre Projekte mit <br>realistischen und beeindruckenden Bildern um. </span>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Der Erfolg unseres Unternehmens basiert auf unserem Fokus&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">auf Kundenzufriedenheit und unserer Leidenschaft für jedes Projekt. Wir streben&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">eine langfristige Partnerschaft an und arbeiten daran, die besten Lösungen für&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Ihr Unternehmen zu bieten.</span>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Indem wir technologische Innovationen und Branchentrends&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">verfolgen, bieten wir unseren Kunden die neuesten Design- und&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Visualisierungslösungen an. Durch die Zusammenarbeit mit uns können Sie das&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Potenzial Ihres Unternehmens steigern und sich gegenüber Ihren Konkurrenten&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">durchsetzen.</span>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Nutzen Sie unsere Dienstleistungen, um die Vision Ihres&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Unternehmens mit professionellen und kreativen Lösungen&nbsp;umzusetzen.</span>
                    </p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-60c660d3" data-id="60c660d3" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-8213e28 elementor-widget__width-initial elementor-widget elementor-widget-image animated fadeInRight" data-id="8213e28" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="image.default">
                  <div class="elementor-widget-container">
                    <img decoding="async" width="768" height="1024" src="https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Uber-Uns-768x1024.jpg" class="elementor-animation-grow attachment-large size-large wp-image-169" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Uber-Uns-768x1024.jpg 768w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Uber-Uns-225x300.jpg 225w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Uber-Uns-1152x1536.jpg 1152w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Uber-Uns-1536x2048.jpg 1536w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Uber-Uns-scaled.jpg 1920w" sizes="(max-width: 768px) 100vw, 768px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-4cb41632 elementor-section-content-middle elementor-section-full_width elementor-reverse-mobile elementor-section-height-default elementor-section-height-default" data-id="4cb41632" data-element_type="section">
          <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-32c90983" data-id="32c90983" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-3a13e0c1 elementor-widget__width-initial elementor-widget elementor-widget-image animated fadeInLeft" data-id="3a13e0c1" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="image.default">
                  <div class="elementor-widget-container">
                    <img decoding="async" width="2048" height="1152" src="https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Unsere-Mission-2048x1152.jpg" class="elementor-animation-grow attachment-2048x2048 size-2048x2048 wp-image-182" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Unsere-Mission-2048x1152.jpg 2048w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Unsere-Mission-300x169.jpg 300w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Unsere-Mission-1024x576.jpg 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Unsere-Mission-768x432.jpg 768w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Unsere-Mission-1536x864.jpg 1536w" sizes="(max-width: 2048px) 100vw, 2048px" />
                  </div>
                </div>
              </div>
            </div>
            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4c460a81" data-id="4c460a81" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-773941f7 elementor-widget elementor-widget-heading" data-id="773941f7" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">
                      <br>Unsere Mission
                    </h2>
                  </div>
                </div>
                <div class="elementor-element elementor-element-bb66678 elementor-widget elementor-widget-text-editor" data-id="bb66678" data-element_type="widget" data-widget_type="text-editor.default">
                  <div class="elementor-widget-container">
                    <p></p>
                    <p>Unser Architektur- und Visualisierungsunternehmen wurde gegründet, <br>um unseren Kunden erstklassige Dienstleistungen zu bieten. Ob es sich um eine <br>Neugestaltung oder die Planung eines neuen Projekts handelt, wir arbeiten <br>daran, die Bedürfnisse unserer Kunden bestmöglich zu erfüllen. </p>
                    <p>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Die von unserem Unternehmen angebotenen Dienstleistungen&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">umfassen viele Bereiche wie Architekturdesign, Innenraumgestaltung,&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">Visualisierung, 3D-Modellierung, Projektmanagement und Beratung. Wir behandeln&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">jedes Projekt einzeln, arbeiten eng mit unseren Kunden zusammen und bieten&nbsp;</span>
                      <span style="letter-spacing: 0px; word-spacing: 0em;">optimal passande Lösungen, die ihren Bedürfnissen entsprechen.</span>
                    </p>
                    <p>
                      <span style="text-align: justify; letter-spacing: 0px; word-spacing: 0em;">&nbsp;</span>
                    </p>
                    <p>
                      <span style="text-align: justify; letter-spacing: 0px; word-spacing: 0em;">Die Zufriedenheit unserer Kunden steht immer an erster Stelle. Wir streben Qualität, Zuverlässigkeit und Exzellenz in unserer Arbeit an. Mit unserem professionellen Team bemühen wir uns immer, die Erwartungen unserer Kunden zu übertreffen, indem wir die neuesten Technologien und Innovationen&nbsp;verfolgen.</span>
                    </p>
                    <p style="text-align: justify;"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-606ed928 elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="606ed928" data-element_type="section">
          <div class="elementor-background-overlay"></div>
          <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-40d81738" data-id="40d81738" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-4b47998f elementor-widget elementor-widget-heading" data-id="4b47998f" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">Warum wir ?</h2>
                  </div>
                </div>
                <div class="elementor-element elementor-element-2f4786b9 elementor-widget elementor-widget-text-editor" data-id="2f4786b9" data-element_type="widget" data-widget_type="text-editor.default">
                  <div class="elementor-widget-container">
                    <p class="MsoNormal" style="text-align: justify;">Weil wir uns Zeit nehmen, um die Bedürfnisse unserer Kunden zu verstehen und hart arbeiten, um ihnen den besten Service zu bieten. Die Priorität unseres Unternehmens ist die Kundenzufriedenheit, deshalb arbeiten wir eng mit unseren Kunden zusammen und geben unser Bestes, um ihre Projekte erfolgreich abzuschließen.</p>
                    <p class="MsoNormal" style="text-align: justify;">Unser Unternehmen verfügt über ein erfahrenes und qualifiziertes Team und verfolgt die neuesten Technologien und Innovationen in der Branche. Dadurch bieten wir unseren Kunden höchste Qualität. Darüber hinaus nehmen wir für jedes Projekt einen maßgeschneiderten Ansatz an, da jeder Kunde einzigartige Anforderungen hat.</p>
                    <p class="MsoNormal" style="text-align: justify;">Unser Unternehmen bietet auch erschwingliche Preise und bietet unseren Kunden entsprechende Dienstleistungen an. Darüber hinaus wenden wir eine strenge Projektmanagementpraxis an, um sicherzustellen, dass die Projekte innerhalb des Budgets und Zeitrahmens abgeschlossen werden.</p>
                    <p>&nbsp;</p>
                    <p class="MsoNormal" style="text-align: justify;">Indem sie mit uns zusammenarbeiten, können unsere Kunden sicher sein, dass sie professionelle, zuverlässige und effektive Dienstleistungen in jeder Phase ihrer Projekte&nbsp;erhalten.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7b82567b" data-id="7b82567b" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-77f267f5 elementor-widget__width-initial elementor-widget elementor-widget-image animated fadeInRight" data-id="77f267f5" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}" data-widget_type="image.default">
                  <div class="elementor-widget-container">
                    <img decoding="async" width="2048" height="1152" src="https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Warum-wir-2048x1152.jpg" class="elementor-animation-grow attachment-2048x2048 size-2048x2048 wp-image-187" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Warum-wir-2048x1152.jpg 2048w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Warum-wir-300x169.jpg 300w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Warum-wir-1024x576.jpg 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Warum-wir-768x432.jpg 768w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-Concept-Design-Warum-wir-1536x864.jpg 1536w" sizes="(max-width: 2048px) 100vw, 2048px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="elementor-element elementor-element-e9f9461 e-con-boxed e-flex e-con" data-id="e9f9461" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;,&quot;content_width&quot;:&quot;boxed&quot;}">
          <div class="e-con-inner">
            <div class="elementor-element elementor-element-03f4928 elementor-widget elementor-widget-heading" data-id="03f4928" data-element_type="widget" data-widget_type="heading.default">
              <div class="elementor-widget-container">
                <h2 class="elementor-heading-title elementor-size-default">Erleben Sie mit uns das Außergewöhnliche</h2>
              </div>
            </div>
            <div class="elementor-element elementor-element-440b7b5 e-con-full e-flex e-con" data-id="440b7b5" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
              <div class="elementor-element elementor-element-12acf8a elementor-view-framed elementor-shape-square elementor-widget__width-initial elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="12acf8a" data-element_type="widget" data-widget_type="icon-box.default">
                <div class="elementor-widget-container">
                  <link rel="stylesheet" href="https://hanconcept.eu/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css" />
                  <div class="elementor-icon-box-wrapper">
                    <div class="elementor-icon-box-icon">
                      <span class="elementor-icon elementor-animation-shrink">
                        <svg aria-hidden="true" class="e-font-icon-svg e-fas-handshake" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                        </svg>
                      </span>
                    </div>
                    <div class="elementor-icon-box-content">
                      <h4 class="elementor-icon-box-title">
                        <span> KUNDENZUFRIEDENHE </span>
                      </h4>
                      <p class="elementor-icon-box-description"> Unser Ziel ist Ihre Zufriedenheit </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elementor-element elementor-element-9f53f79 elementor-view-framed elementor-shape-square elementor-widget__width-initial elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="9f53f79" data-element_type="widget" data-widget_type="icon-box.default">
                <div class="elementor-widget-container">
                  <div class="elementor-icon-box-wrapper">
                    <div class="elementor-icon-box-icon">
                      <span class="elementor-icon elementor-animation-shrink">
                        <svg aria-hidden="true" class="e-font-icon-svg e-far-check-square" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path>
                        </svg>
                      </span>
                    </div>
                    <div class="elementor-icon-box-content">
                      <h4 class="elementor-icon-box-title">
                        <span> LÖSUNGSORIENTIERT </span>
                      </h4>
                      <p class="elementor-icon-box-description"> Mit unserem lösungsorientierten Ansatz verwandeln wir Probleme in Chancen </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elementor-element elementor-element-f088a2f elementor-view-framed elementor-shape-square elementor-widget__width-initial elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="f088a2f" data-element_type="widget" data-widget_type="icon-box.default">
                <div class="elementor-widget-container">
                  <div class="elementor-icon-box-wrapper">
                    <div class="elementor-icon-box-icon">
                      <span class="elementor-icon elementor-animation-shrink">
                        <svg aria-hidden="true" class="e-font-icon-svg e-fas-money-bill-wave-alt" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96z"></path>
                        </svg>
                      </span>
                    </div>
                    <div class="elementor-icon-box-content">
                      <h4 class="elementor-icon-box-title">
                        <span> FAIRE ANGEBOTE </span>
                      </h4>
                      <p class="elementor-icon-box-description"> Fair angebotene Preise schaffen Vertrauen </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elementor-element elementor-element-1a4aace elementor-view-framed elementor-shape-square elementor-widget__width-initial elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="1a4aace" data-element_type="widget" data-widget_type="icon-box.default">
                <div class="elementor-widget-container">
                  <div class="elementor-icon-box-wrapper">
                    <div class="elementor-icon-box-icon">
                      <span class="elementor-icon elementor-animation-shrink">
                        <svg aria-hidden="true" class="e-font-icon-svg e-fas-project-diagram" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </div>
                    <div class="elementor-icon-box-content">
                      <h4 class="elementor-icon-box-title">
                        <span> Qualifikation </span>
                      </h4>
                      <p class="elementor-icon-box-description"> Qualifikation ist der Schlüssel zum Erfolg </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-408bea5d elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="408bea5d" data-element_type="section">
          <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5ef9c282" data-id="5ef9c282" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated e-swiper-container">
                <div class="elementor-element elementor-element-5ff1098 elementor-widget elementor-widget-heading" data-id="5ff1098" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h4 class="elementor-heading-title elementor-size-default">ARCHITEKTUR <br>VISUALISIRUNGEN </h4>
                  </div>
                </div>
                <div class="elementor-element elementor-element-4c2c719 elementor-widget elementor-widget-heading" data-id="4c2c719" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">Entdecken SIe unsere Wunderwelt mIt eInem BlIck</h2>
                  </div>
                </div>
                <div class="elementor-element elementor-element-62ad20e5 elementor--v-position-bottom elementor-pagination-position-outside elementor--h-position-center elementor-arrows-position-inside elementor-widget elementor-widget-slides e-widget-swiper animated fadeIn" data-id="62ad20e5" data-element_type="widget" data-settings="{&quot;transition&quot;:&quot;fade&quot;,&quot;autoplay_speed&quot;:7000,&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;transition_speed&quot;:500}" data-widget_type="slides.default">
                  <div class="elementor-widget-container">
                    <div class="elementor-swiper">
                      <div class="elementor-slides-wrapper elementor-main-swiper swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress" dir="ltr" data-animation="">
                        <div class="swiper-wrapper elementor-slides" id="swiper-wrapper-312f410c005fec5a0" aria-live="off" style="cursor: grab; transition-duration: 0ms;">
                          <div class="elementor-repeater-item-9a609bd swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(0px, 0px, 0px);" role="group" aria-label="1 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-32fceef swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-300px, 0px, 0px);" role="group" aria-label="2 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-051d6af swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-600px, 0px, 0px);" role="group" aria-label="3 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9e5cddb swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="3" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-900px, 0px, 0px);" role="group" aria-label="4 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-1a3ca45 swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="4" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1200px, 0px, 0px);" role="group" aria-label="5 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-d3d027b swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="5" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1500px, 0px, 0px);" role="group" aria-label="6 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-f07506d swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1800px, 0px, 0px);" role="group" aria-label="7 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9a609bd swiper-slide" data-swiper-slide-index="0" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2100px, 0px, 0px);" role="group" aria-label="1 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-32fceef swiper-slide" data-swiper-slide-index="1" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2400px, 0px, 0px);" role="group" aria-label="2 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-051d6af swiper-slide" data-swiper-slide-index="2" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2700px, 0px, 0px);" role="group" aria-label="3 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9e5cddb swiper-slide swiper-slide-prev" data-swiper-slide-index="3" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-3000px, 0px, 0px);" role="group" aria-label="4 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-1a3ca45 swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index="4" style="width: 300px; transition-duration: 0ms; opacity: 1; transform: translate3d(-3300px, 0px, 0px);" role="group" aria-label="5 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in elementor-ken-burns--active" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-d3d027b swiper-slide swiper-slide-next" data-swiper-slide-index="5" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-3600px, 0px, 0px);" role="group" aria-label="6 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-f07506d swiper-slide" data-swiper-slide-index="6" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-3900px, 0px, 0px);" role="group" aria-label="7 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9a609bd swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-4200px, 0px, 0px);" role="group" aria-label="1 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-32fceef swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-4500px, 0px, 0px);" role="group" aria-label="2 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-051d6af swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-4800px, 0px, 0px);" role="group" aria-label="3 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9e5cddb swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="3" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-5100px, 0px, 0px);" role="group" aria-label="4 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-1a3ca45 swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="4" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-5400px, 0px, 0px);" role="group" aria-label="5 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-d3d027b swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="5" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-5700px, 0px, 0px);" role="group" aria-label="6 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-f07506d swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" role="group" aria-label="7 / 7" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-6000px, 0px, 0px);">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span>
                          <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 5" aria-current="true"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span>
                        </div>
                        <div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-312f410c005fec5a0">
                          <svg aria-hidden="true" class="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                            <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                          </svg>
                          <span class="elementor-screen-only">Previous slide</span>
                        </div>
                        <div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-312f410c005fec5a0">
                          <svg aria-hidden="true" class="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                            <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                          </svg>
                          <span class="elementor-screen-only">Next slide</span>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-bc9f588 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bc9f588" data-element_type="section">
          <div class="elementor-background-overlay"></div>
          <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fd513ae" data-id="fd513ae" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated e-swiper-container">
                <div class="elementor-element elementor-element-32fa8ae elementor-widget elementor-widget-heading" data-id="32fa8ae" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h4 class="elementor-heading-title elementor-size-default">Innenraum <br>vIsualIsIerungen </h4>
                  </div>
                </div>
                <div class="elementor-element elementor-element-288821c elementor-widget elementor-widget-heading" data-id="288821c" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h5 class="elementor-heading-title elementor-size-default">EIne Welt voller Wunder wartet auf SIe</h5>
                  </div>
                </div>
                <div class="elementor-element elementor-element-476c5ab elementor--v-position-bottom elementor-pagination-position-outside elementor--h-position-center elementor-arrows-position-inside elementor-widget elementor-widget-slides e-widget-swiper animated fadeIn" data-id="476c5ab" data-element_type="widget" data-settings="{&quot;transition&quot;:&quot;fade&quot;,&quot;autoplay_speed&quot;:7000,&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;transition_speed&quot;:500}" data-widget_type="slides.default">
                  <div class="elementor-widget-container">
                    <div class="elementor-swiper">
                      <div class="elementor-slides-wrapper elementor-main-swiper swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress" dir="ltr" data-animation="">
                        <div class="swiper-wrapper elementor-slides" id="swiper-wrapper-451a3e6a2be76caf" aria-live="off" style="cursor: grab; transition-duration: 0ms;">
                          <div class="elementor-repeater-item-9a609bd swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(0px, 0px, 0px);" role="group" aria-label="1 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-e976b52 swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-300px, 0px, 0px);" role="group" aria-label="2 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-32fceef swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-600px, 0px, 0px);" role="group" aria-label="3 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-051d6af swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="3" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-900px, 0px, 0px);" role="group" aria-label="4 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9e5cddb swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="4" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1200px, 0px, 0px);" role="group" aria-label="5 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-1a3ca45 swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="5" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1500px, 0px, 0px);" role="group" aria-label="6 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-d3d027b swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1800px, 0px, 0px);" role="group" aria-label="7 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9a609bd swiper-slide" data-swiper-slide-index="0" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2100px, 0px, 0px);" role="group" aria-label="1 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-e976b52 swiper-slide" data-swiper-slide-index="1" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2400px, 0px, 0px);" role="group" aria-label="2 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-32fceef swiper-slide" data-swiper-slide-index="2" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2700px, 0px, 0px);" role="group" aria-label="3 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-051d6af swiper-slide swiper-slide-prev" data-swiper-slide-index="3" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-3000px, 0px, 0px);" role="group" aria-label="4 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9e5cddb swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index="4" style="width: 300px; transition-duration: 0ms; opacity: 1; transform: translate3d(-3300px, 0px, 0px);" role="group" aria-label="5 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in elementor-ken-burns--active" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-1a3ca45 swiper-slide swiper-slide-next" data-swiper-slide-index="5" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-3600px, 0px, 0px);" role="group" aria-label="6 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-d3d027b swiper-slide" data-swiper-slide-index="6" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-3900px, 0px, 0px);" role="group" aria-label="7 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9a609bd swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-4200px, 0px, 0px);" role="group" aria-label="1 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-e976b52 swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-4500px, 0px, 0px);" role="group" aria-label="2 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-32fceef swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-4800px, 0px, 0px);" role="group" aria-label="3 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-051d6af swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="3" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-5100px, 0px, 0px);" role="group" aria-label="4 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-9e5cddb swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="4" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-5400px, 0px, 0px);" role="group" aria-label="5 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-1a3ca45 swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="5" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-5700px, 0px, 0px);" role="group" aria-label="6 / 7">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-repeater-item-d3d027b swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" role="group" aria-label="7 / 7" style="width: 300px; transition-duration: 0ms; opacity: 0; transform: translate3d(-6000px, 0px, 0px);">
                            <div class="swiper-slide-bg elementor-ken-burns elementor-ken-burns--in" role="img"></div>
                            <div class="swiper-slide-inner">
                              <div class="swiper-slide-contents">
                                <a href="https://hanconcept.eu/portfolio-2/" class="elementor-button elementor-slide-button elementor-size-md">Mehr</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span>
                          <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 5" aria-current="true"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6"></span>
                          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span>
                        </div>
                        <div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-451a3e6a2be76caf">
                          <svg aria-hidden="true" class="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                            <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                          </svg>
                          <span class="elementor-screen-only">Previous slide</span>
                        </div>
                        <div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-451a3e6a2be76caf">
                          <svg aria-hidden="true" class="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                            <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                          </svg>
                          <span class="elementor-screen-only">Next slide</span>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-5b70102e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5b70102e" data-element_type="section">
          <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9f5d6a3" data-id="9f5d6a3" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-4f0edb84 elementor-widget elementor-widget-heading" data-id="4f0edb84" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h4 class="elementor-heading-title elementor-size-default">referenzen</h4>
                  </div>
                </div>
                <section class="elementor-section elementor-inner-section elementor-element elementor-element-647b5bd4 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="647b5bd4" data-element_type="section">
                  <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-20cde3e1" data-id="20cde3e1" data-element_type="column">
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-3dc166f0 elementor-cta--skin-cover elementor-cta--valign-middle elementor-bg-transform elementor-bg-transform-zoom-out elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="3dc166f0" data-element_type="widget" data-widget_type="call-to-action.default">
                          <div class="elementor-widget-container">
                            <link rel="stylesheet" href="https://hanconcept.eu/wp-content/plugins/elementor-pro/assets/css/widget-call-to-action.min.css" />
                            <a class="elementor-cta" href="https://www.teamneunzehn.at/" target="_blank">
                              <div class="elementor-cta__bg-wrapper">
                                <div class="elementor-cta__bg elementor-bg" style="background-image: url();" role="img" aria-label=""></div>
                                <div class="elementor-cta__bg-overlay"></div>
                              </div>
                              <div class="elementor-cta__content">
                                <div class="elementor-content-item elementor-cta__content-item elementor-cta__image elementor-animated-item--grow">
                                  <img decoding="async" width="2048" height="1140" src="https://hanconcept.eu/wp-content/uploads/2023/03/Final-Team19-2048x1140.png" class="attachment-2048x2048 size-2048x2048 wp-image-794" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/Final-Team19-2048x1140.png 2048w, https://hanconcept.eu/wp-content/uploads/2023/03/Final-Team19-300x167.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/Final-Team19-1024x570.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/Final-Team19-768x427.png 768w, https://hanconcept.eu/wp-content/uploads/2023/03/Final-Team19-1536x855.png 1536w" sizes="(max-width: 2048px) 100vw, 2048px" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="elementor-element elementor-element-4198d10 elementor-cta--skin-cover elementor-cta--valign-middle elementor-bg-transform elementor-bg-transform-zoom-out elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="4198d10" data-element_type="widget" data-widget_type="call-to-action.default">
                          <div class="elementor-widget-container">
                            <a class="elementor-cta" href="https://www.efebau.at/" target="_blank">
                              <div class="elementor-cta__bg-wrapper">
                                <div class="elementor-cta__bg elementor-bg" style="background-image: url();" role="img" aria-label=""></div>
                                <div class="elementor-cta__bg-overlay"></div>
                              </div>
                              <div class="elementor-cta__content">
                                <div class="elementor-content-item elementor-cta__content-item elementor-cta__image elementor-animated-item--grow">
                                  <img decoding="async" width="1902" height="316" src="https://hanconcept.eu/wp-content/uploads/2023/03/EFEBau.png" class="attachment-2048x2048 size-2048x2048 wp-image-798" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/EFEBau.png 1902w, https://hanconcept.eu/wp-content/uploads/2023/03/EFEBau-300x50.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/EFEBau-1024x170.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/EFEBau-768x128.png 768w, https://hanconcept.eu/wp-content/uploads/2023/03/EFEBau-1536x255.png 1536w" sizes="(max-width: 1902px) 100vw, 1902px" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="elementor-element elementor-element-afee4f9 elementor-cta--skin-cover elementor-cta--valign-middle elementor-bg-transform elementor-bg-transform-zoom-out elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="afee4f9" data-element_type="widget" data-widget_type="call-to-action.default">
                          <div class="elementor-widget-container">
                            <a class="elementor-cta" href="https://velluto.at/" target="_blank">
                              <div class="elementor-cta__bg-wrapper">
                                <div class="elementor-cta__bg elementor-bg" style="background-image: url();" role="img" aria-label=""></div>
                                <div class="elementor-cta__bg-overlay"></div>
                              </div>
                              <div class="elementor-cta__content">
                                <div class="elementor-content-item elementor-cta__content-item elementor-cta__image elementor-animated-item--grow">
                                  <img decoding="async" width="1864" height="432" src="https://hanconcept.eu/wp-content/uploads/2023/03/velluto.png" class="attachment-2048x2048 size-2048x2048 wp-image-803" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/velluto.png 1864w, https://hanconcept.eu/wp-content/uploads/2023/03/velluto-300x70.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/velluto-1024x237.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/velluto-768x178.png 768w, https://hanconcept.eu/wp-content/uploads/2023/03/velluto-1536x356.png 1536w" sizes="(max-width: 1864px) 100vw, 1864px" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a1b4026" data-id="a1b4026" data-element_type="column">
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-bdffd03 elementor-cta--skin-cover elementor-cta--valign-middle elementor-bg-transform elementor-bg-transform-zoom-out elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="bdffd03" data-element_type="widget" data-widget_type="call-to-action.default">
                          <div class="elementor-widget-container">
                            <a class="elementor-cta" href="https://www.tash-immobilien.at/" target="_blank">
                              <div class="elementor-cta__bg-wrapper">
                                <div class="elementor-cta__bg elementor-bg" style="background-image: url();" role="img" aria-label=""></div>
                                <div class="elementor-cta__bg-overlay"></div>
                              </div>
                              <div class="elementor-cta__content">
                                <div class="elementor-content-item elementor-cta__content-item elementor-cta__image elementor-animated-item--grow">
                                  <img decoding="async" width="2048" height="1298" src="https://hanconcept.eu/wp-content/uploads/2023/03/tash-01-2048x1298.png" class="attachment-2048x2048 size-2048x2048 wp-image-797" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/tash-01-2048x1298.png 2048w, https://hanconcept.eu/wp-content/uploads/2023/03/tash-01-300x190.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/tash-01-1024x649.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/tash-01-768x487.png 768w, https://hanconcept.eu/wp-content/uploads/2023/03/tash-01-1536x974.png 1536w" sizes="(max-width: 2048px) 100vw, 2048px" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="elementor-element elementor-element-81a6045 elementor-cta--skin-cover elementor-cta--valign-middle elementor-bg-transform elementor-bg-transform-zoom-out elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="81a6045" data-element_type="widget" data-widget_type="call-to-action.default">
                          <div class="elementor-widget-container">
                            <a class="elementor-cta" href="http://www.verhoeven.at/" target="_blank">
                              <div class="elementor-cta__bg-wrapper">
                                <div class="elementor-cta__bg elementor-bg" style="background-image: url();" role="img" aria-label=""></div>
                                <div class="elementor-cta__bg-overlay"></div>
                              </div>
                              <div class="elementor-cta__content">
                                <div class="elementor-content-item elementor-cta__content-item elementor-cta__image elementor-animated-item--grow">
                                  <img decoding="async" width="1741" height="383" src="https://hanconcept.eu/wp-content/uploads/2023/03/Verhoeven.png" class="attachment-2048x2048 size-2048x2048 wp-image-799" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/Verhoeven.png 1741w, https://hanconcept.eu/wp-content/uploads/2023/03/Verhoeven-300x66.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/Verhoeven-1024x225.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/Verhoeven-768x169.png 768w, https://hanconcept.eu/wp-content/uploads/2023/03/Verhoeven-1536x338.png 1536w" sizes="(max-width: 1741px) 100vw, 1741px" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="elementor-element elementor-element-6640e3d elementor-cta--skin-cover elementor-cta--valign-middle elementor-bg-transform elementor-bg-transform-zoom-out elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="6640e3d" data-element_type="widget" data-widget_type="call-to-action.default">
                          <div class="elementor-widget-container">
                            <a class="elementor-cta" href="https://hanconcept.eu/" target="_blank">
                              <div class="elementor-cta__bg-wrapper">
                                <div class="elementor-cta__bg elementor-bg" style="background-image: url();" role="img" aria-label=""></div>
                                <div class="elementor-cta__bg-overlay"></div>
                              </div>
                              <div class="elementor-cta__content">
                                <div class="elementor-content-item elementor-cta__content-item elementor-cta__image elementor-animated-item--grow">
                                  <img decoding="async" width="1966" height="834" src="https://hanconcept.eu/wp-content/uploads/2023/03/HAN-KUSKON.png" class="attachment-2048x2048 size-2048x2048 wp-image-805" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/HAN-KUSKON.png 1966w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-KUSKON-300x127.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-KUSKON-1024x434.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-KUSKON-768x326.png 768w, https://hanconcept.eu/wp-content/uploads/2023/03/HAN-KUSKON-1536x652.png 1536w" sizes="(max-width: 1966px) 100vw, 1966px" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="elementor-section elementor-inner-section elementor-element elementor-element-642cd6d5 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="642cd6d5" data-element_type="section">
                  <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2b84c038" data-id="2b84c038" data-element_type="column">
                      <div class="elementor-widget-wrap"></div>
                    </div>
                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5af3b128" data-id="5af3b128" data-element_type="column">
                      <div class="elementor-widget-wrap"></div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-12d29190 elementor-section-content-middle elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="12d29190" data-element_type="section">
          <div class="elementor-background-overlay"></div>
          <div class="elementor-container elementor-column-gap-no">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5ccdb2cd" data-id="5ccdb2cd" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-4d62c51f elementor-widget elementor-widget-heading" data-id="4d62c51f" data-element_type="widget" data-widget_type="heading.default">
                  <div class="elementor-widget-container">
                    <h3 class="elementor-heading-title elementor-size-default">Eine großartige Erfahrung erwartet&nbsp;Sie!</h3>
                  </div>
                </div>
                <div class="elementor-element elementor-element-78af0df1 elementor-widget elementor-widget-text-editor" data-id="78af0df1" data-element_type="widget" data-widget_type="text-editor.default">
                  <div class="elementor-widget-container">
                    <p>Treten Sie mit unserem lösungsorientierten Team in Kontakt – Wir freuen uns darauf, Ihre Fragen zu beantworten!</p>
                  </div>
                </div>
                <div class="elementor-element elementor-element-d726df1 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="d726df1" data-element_type="widget" data-widget_type="button.default">
                  <div class="elementor-widget-container">
                    <div class="elementor-button-wrapper">
                      <a href="https://hanconcept.eu/contact/" target="_blank" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                        <span class="elementor-button-content-wrapper">
                          <span class="elementor-button-text">Kontaktieren Sie uns</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section className='bg-white'>
      <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
        <Vercel className='text-5xl' />
        <h1 className='mt-4'> Next.js + Tailwind CSS + TypeScript Starter </h1>
        <p className='mt-2 text-sm text-gray-800'> A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky{' '} </p>
        <p className='mt-2 text-sm text-gray-700'>
          <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'> See the repository </ArrowLink>
        </p>
        <ButtonLink className='mt-6' href='/components' variant='light'> See all components </ButtonLink>
        <UnstyledLink href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter' className='mt-4'> {/* eslint-disable-next-line @next/next/no-img-element */} <img width='92' height='32' src='https://vercel.com/button' alt='Deploy with Vercel' />
        </UnstyledLink>
        <footer className='absolute bottom-2 text-gray-700'> © {new Date().getFullYear()} By{' '} <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'> Theodorus Clarence </UnderlineLink>
        </footer>
      </div>
    </section>
  </main>
  <footer data-elementor-type="footer" data-elementor-id="597" class="elementor elementor-597 elementor-location-footer">
    <div class="elementor-background-overlay"></div>
    <div class="elementor-container elementor-column-gap-no">
      <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-c302f8b" data-id="c302f8b" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor-element-7e37ea53 elementor-widget elementor-widget-image" data-id="7e37ea53" data-element_type="widget" data-widget_type="image.default">
            <div class="elementor-widget-container">
              <img width="300" height="134" src="https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-300x134.png" class="attachment-medium size-medium wp-image-85" alt="" loading="lazy" srcset="https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-300x134.png 300w, https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-1024x457.png 1024w, https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-768x343.png 768w, https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-1536x685.png 1536w, https://hanconcept.eu/wp-content/uploads/2023/03/Unbenannt-111-2048x913.png 2048w" sizes="(max-width: 300px) 100vw, 300px" />
            </div>
          </div>
        </div>
      </div>
      <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-23edd734" data-id="23edd734" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor-element-463d8645 elementor-tablet-align-center elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="463d8645" data-element_type="widget" data-widget_type="icon-list.default">
            <div class="elementor-widget-container">
              <link rel="stylesheet" href="https://hanconcept.eu/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
              <ul class="elementor-icon-list-items">
                <li class="elementor-icon-list-item">
                  <span class="elementor-icon-list-icon">
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-mail-bulk" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text">office@hanconcept.eu</span>
                </li>
                <li class="elementor-icon-list-item">
                  <span class="elementor-icon-list-icon">
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text">+43 665 652 54 280</span>
                </li>
                <li class="elementor-icon-list-item">
                  <span class="elementor-icon-list-icon">
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-map-marker" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text">Reithofferplatz 12 , 1150 Wien, Österreich</span>
                </li>
                <li class="elementor-icon-list-item">
                  <span class="elementor-icon-list-icon">
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-clock" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                    </svg>
                  </span>
                  <span class="elementor-icon-list-text">Mo-Fr 9:00 - 17.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-6b7438db" data-id="6b7438db" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor-element-3ec1ee68 e-grid-align-right e-grid-align-tablet-right e-grid-align-mobile-center elementor-widget-mobile__width-inherit elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="3ec1ee68" data-element_type="widget" data-widget_type="social-icons.default">
            <div class="elementor-widget-container">
              <div class="elementor-social-icons-wrapper elementor-grid">
                <span class="elementor-grid-item">
                  <a class="elementor-icon elementor-social-icon elementor-social-icon- elementor-repeater-item-5c0ce3c" target="_blank">
                    <span class="elementor-screen-only"></span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <section class="elementor-section elementor-top-section elementor-element elementor-element-1e57da85 elementor-section-height-min-height elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-items-middle" data-id="1e57da85" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
    <div class="elementor-container elementor-column-gap-no">
      <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67046ec1" data-id="67046ec1" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor-element-552eddc4 elementor-widget elementor-widget-heading" data-id="552eddc4" data-element_type="widget" data-widget_type="heading.default">
            <div class="elementor-widget-container">
              <p class="elementor-heading-title elementor-size-default">© Copyright 2023. All Rights Reserved H4N Concept &amp; Design e.U.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</Layout>
  );
}

  );
}
