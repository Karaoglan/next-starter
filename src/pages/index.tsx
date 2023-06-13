import Image from 'next/image';

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

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4'>
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

            <UnstyledLink
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
              className='mt-4'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='Deploy with Vercel'
              />
            </UnstyledLink>
          </div>
        </section>

        <section className='home section' id='home'>
          <div className='home__container container grid'>
            <div className='home__content grid'>
              <div className='home__social'>
                <a
                  href='https://www.linkedin.com/in/rawatanimesh/'
                  target='_blank'
                  className='home__social-icon'
                >
                  <i className='uil uil-linkedin-alt'></i>
                </a>
                <a
                  href='https://github.com/rawatanimesh'
                  target='_blank'
                  className='home__social-icon'
                >
                  <i className='uil uil-github-alt'></i>
                </a>
                <a
                  href='https://t.me/rawatanimesh'
                  target='_blank'
                  className='home__social-icon'
                >
                  <i className='uil uil-telegram-alt'></i>
                </a>
              </div>

              <div className='home__data'>
                <h1 className='home__title'>Hi, I am Animesh</h1>
                <h3 className='home__subtitle'>Web Developer</h3>
                <p className='home__description'>
                  I have a passion for building intuitive, user-friendly
                  interfaces that provide an enjoyable and seamless user
                  experience.
                </p>
                <a href='#contact' className='button button--flex'>
                  Contact Me<i className='uil uil-message button__icon'></i>
                </a>
              </div>
            </div>
            <div className='home__scroll'>
              <a href='#about' className='home__scroll-button button--flex'>
                <i className='uil uil-mouse-alt home__scroll-mouse'></i>
                <span className='home__scroll-name'>Scroll Down</span>
                <i className='uil uil-arrow-down home__scroll-arrow'></i>
              </a>
            </div>
          </div>
        </section>

        <section className='about section' id='about'>
          <h2 className='section__title'>About Me</h2>
          <span className='section__subtitle'>My Introduction</span>

          <div className='about__container container grid'>
            <Image
              src='assets/img/mt-fuji.jpg'
              alt=''
              className='about__image'
            />

            <div className='about__data'>
              <p className='about__description'>
                I have 7.5 years of experience and a deep understanding of
                various web technologies such as HTML, CSS, JavaScript,
                TypeScript, Angular, MEAN, Vue.js, and React. <br />
                I am dedicated to keeping up with the latest trends and
                techniques in web development, and I am constantly learning and
                expanding my skill set. I have a keen eye for detail and strive
                for perfection in every project I work on. <br />
                When I'm not coding, I enjoy exploring new technologies and work
                on side projects. I am a sports enthusiast. I play basketball
                and go to practice regularly. I am also a big football fan and
                my favourite club is Arsenal.
              </p>
              <div className='about__info'>
                <div>
                  <span className='about__info-title'>7.5+</span>
                  <span className='about__info-name'>
                    Years <br />
                    experience
                  </span>
                </div>

                <div>
                  <span className='about__info-title'>20+</span>
                  <span className='about__info-name'>
                    Projects <br />
                    completed
                  </span>
                </div>

                <div>
                  <span className='about__info-title'>04+</span>
                  <span className='about__info-name'>
                    Companies <br />
                    worked
                  </span>
                </div>
              </div>

              <div className='about__buttons'>
                <a
                  download=''
                  href='assets/pdf/animesh_resume.pdf'
                  className='button button--flex'
                >
                  Download Resume
                  <i className='uil uil-download-alt button__icon'></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='skills section' id='skills'>
          <h2 className='section__title'>Skills</h2>
          <span className='section__subtitle'>My tech stack</span>
          <div className='skills__container container grid'>
            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/angular.svg'
                alt='angular'
              />
              <div className='skills__container-name'>Angular</div>
            </div>

            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/vue.svg'
                alt='vue'
              />
              <div className='skills__container-name'>Vue</div>
            </div>

            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/react.svg'
                alt='react'
              />
              <div className='skills__container-name'>React</div>
            </div>

            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/typescript.svg'
                alt='typescript'
              />
              <div className='skills__container-name'>TypeScript</div>
            </div>

            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/javascript.svg'
                alt='javascript'
              />
              <div className='skills__container-name'>JavaScript</div>
            </div>

            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/html.svg'
                alt='html'
              />
              <div className='skills__container-name'>HTML</div>
            </div>

            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/css.svg'
                alt='css'
              />
              <div className='skills__container-name'>CSS</div>
            </div>

            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/sass.svg'
                alt='sass'
              />
              <div className='skills__container-name'>SASS</div>
            </div>

            <div className='skills__container-box'>
              <Image
                className='skills__container-img'
                src='/assets/img/skills/firebase.svg'
                alt='firebase'
              />
              <div className='skills__container-name'>Firebase</div>
            </div>
          </div>
        </section>

        <section className='qualification section'>
          <h2 className='section__title'>Qualification</h2>
          <span className='section__subtitle'>My personal journey</span>

          <div className='qualification__container container'>
            <div className='qualification__tabs'>
              <div
                className='qualification__button button--flex qualification__active'
                data-target='#work'
              >
                <i className='uil uil-briefcase-alt qualification__icon'> </i>{' '}
                Work
              </div>

              <div
                className='qualification__button button--flex'
                data-target='#education'
              >
                <i className='uil uil-graduation-cap qualification__icon'> </i>
                Education
              </div>
            </div>

            <div className='qualification__sections'>
              <div
                className='qualification__content qualification__active'
                data-content
                id='work'
              >
                <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>Software Engineer</h3>
                    <span className='qualification__subtitle'>
                      {' '}
                      Tech Mahindra{' '}
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calendar-alt'></i> 2015-2018
                    </div>
                  </div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div></div>
                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                  <div>
                    <h3 className='qualification__title'>Frontend Developer</h3>
                    <span className='qualification__subtitle'> Mobikasa </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calendar-alt'></i> 2018-2019
                    </div>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>Lead Engineer</h3>
                    <span className='qualification__subtitle'> HCL </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calendar-alt'></i> 2019-2020
                    </div>
                  </div>
                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div></div>
                  <div>
                    <span className='qualification__rounder'></span>
                  </div>
                  <div>
                    <h3 className='qualification__title'>UI/UX Engineer</h3>
                    <span className='qualification__subtitle'> Rakuten </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calendar-alt'></i> 2020-2023
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='qualification__content'
                data-content
                id='education'
              >
                <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>HSC, Science</h3>
                    <span className='qualification__subtitle'>
                      St. Mary's Academy
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calendar-alt'></i> 2009-2011
                    </div>
                  </div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div></div>
                  <div>
                    <span className='qualification__rounder'></span>
                  </div>
                  <div>
                    <h3 className='qualification__title'>
                      B.Tech, Electronics
                    </h3>
                    <span className='qualification__subtitle'>
                      {' '}
                      Sharda University{' '}
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calendar-alt'></i> 2011-2015
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='services section' id='services'>
          <h2 className='section__title'>Services</h2>
          <span className='section__subtitle'>What I offer</span>

          <div className='services__container container grid'>
            <div className='services__content'>
              <div>
                <i className='uil uil-arrow services__icon'></i>
                <h3 className='services__title'>
                  Web
                  <br />
                  Developer
                </h3>
              </div>

              <span className='button button--flex button--small button--link services__button'>
                View More
                <i className='uil uil-arrow-right button__icon'></i>
              </span>

              <div className='services__modal'>
                <div className='services__modal-content'>
                  <h4 className='services__modal-title'>
                    Web
                    <br />
                    Developer
                  </h4>
                  <i className='uil uil-times services__modal-close'></i>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>
                        I develop web applications with end to end solutions for
                        frontend and backend
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>I handle website deployment</p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>I optimize website performance</p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>I help in webiste SEO optimization</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='services__content'>
              <div>
                <i className='uil uil-mobile-android services__icon'></i>
                <h3 className='services__title'>
                  Hybrid App
                  <br />
                  Developer
                </h3>
              </div>

              <span className='button button--flex button--small button--link services__button'>
                View More
                <i className='uil uil-arrow-right button__icon'></i>
              </span>

              <div className='services__modal'>
                <div className='services__modal-content'>
                  <h4 className='services__modal-title'>
                    Hybrid App
                    <br />
                    Developer
                  </h4>
                  <i className='uil uil-times services__modal-close'></i>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>I develop hybrid mobile apps</p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>I create apps for mobile and tablets</p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>I handle cross platform compatibility</p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>I optimize application performances</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='portfolio section' id='portfolio'>
          <h2 className='section__title'>Portfolio</h2>
          <span className='section__subtitle'>Most recent work</span>

          <div className='portfolio__container swiper-container container'>
            <div className='swiper-wrapper'>
              <div className='portfolio__content swiper-slide grid'>
                <Image
                  src='/assets/img/portfolio/unichat.PNG'
                  alt=''
                  className='portfolio__img'
                />
                <div className='portfolio__data'>
                  <h3 className='portfolio__title'>Chat Application</h3>
                  <p className='portfolio__description'>
                    Chat app created using react, firebase and chat-engine.
                  </p>
                  <a
                    href='https://github.com/rawatanimesh/react-chat-app'
                    target='_blank'
                    className='button button--flex button--small portfolio__button'
                  >
                    Demo
                    <i className='uil uil-arrow-right button__icon'></i>
                  </a>
                </div>
              </div>

              <div className='portfolio__content swiper-slide grid'>
                <Image
                  src='/assets/img/portfolio/track-service-request.PNG'
                  alt=''
                  className='portfolio__img'
                />
                <div className='portfolio__data'>
                  <h3 className='portfolio__title'>
                    Track service request graph
                  </h3>
                  <p className='portfolio__description'>
                    Service request graph to show various stages of
                    bidirectional progress.
                  </p>
                  <a
                    href='https://github.com/rawatanimesh/angular-workflow-track-service-request-graph'
                    target='_blank'
                    className='button button--flex button--small portfolio__button'
                  >
                    Demo
                    <i className='uil uil-arrow-right button__icon'></i>
                  </a>
                </div>
              </div>

              <div className='portfolio__content swiper-slide grid'>
                <Image
                  src='/assets/img/portfolio/stopwatch.png'
                  alt=''
                  className='portfolio__img'
                />
                <div className='portfolio__data'>
                  <h3 className='portfolio__title'>Stop-watch</h3>
                  <p className='portfolio__description'>
                    Light weight Stop-Watch application using Angular without
                    external libraries/dependencies.
                  </p>
                  <a
                    href='https://github.com/rawatanimesh/react-chat-app'
                    target='_blank'
                    className='button button--flex button--small portfolio__button'
                  >
                    Demo
                    <i className='uil uil-arrow-right button__icon'></i>
                  </a>
                </div>
              </div>

              <div className='portfolio__content swiper-slide grid'>
                <Image
                  src='/assets/img/portfolio/file-reader.png'
                  alt=''
                  className='portfolio__img'
                />
                <div className='portfolio__data'>
                  <h3 className='portfolio__title'>File reader</h3>
                  <p className='portfolio__description'>
                    Light weight file reader Angular component without external
                    libraries/dependencies.
                  </p>
                  <a
                    href='https://github.com/rawatanimesh/angular-file-reader'
                    target='_blank'
                    className='button button--flex button--small portfolio__button'
                  >
                    Demo
                    <i className='uil uil-arrow-right button__icon'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='swiper-button-next'>
              <i className='uil uil-angle-right-b swiper-portfolio-icon'></i>
            </div>
            <div className='swiper-button-prev'>
              <i className='uil uil-angle-left-b swiper-portfolio-icon'></i>
            </div>

            <div className='swiper-pagination'></div>
          </div>
        </section>

        <section className='project section'>
          <div className='project__bg'>
            <div className='project__container container grid'>
              <div className='project__data'>
                <h2 className='project__title'>You have a new project ?</h2>
                <p className='project__description'>
                  I would love to chat with you about your project and see how
                  we can work together to create something truly amazing. Let's
                  connect.
                </p>
                <a
                  href='#contact'
                  className='button button--flex button--white'
                >
                  Contact Me
                  <i className='uil uil-message project__icon button__icon'></i>
                </a>
              </div>

              <Image
                src='/assets/img/travel-pic3.png'
                alt=''
                className='project__img'
              />
            </div>
          </div>
        </section>

        <section className='contact section' id='contact'>
          <h2 className='section__title'>Contact Me</h2>
          <span className='section__subtitle'>Get in touch</span>

          <div className='contact__container container grid'>
            <div>
              <div className='contact__information'>
                <i className='uil uil-phone contact__icon'></i>

                <div>
                  <h3 className='contact__title'>Call Me</h3>
                  <span className='contact__subtitle'>+91 7838436141</span>
                </div>
              </div>

              <div className='contact__information'>
                <i className='uil uil-envelope contact__icon'></i>

                <div>
                  <h3 className='contact__title'>Email</h3>
                  <span className='contact__subtitle'>
                    animesh.rawat20@gmail.com
                  </span>
                </div>
              </div>

              <div className='contact__information'>
                <i className='uil uil-map-marker contact__icon'></i>

                <div>
                  <h3 className='contact__title'>Location</h3>
                  <span className='contact__subtitle'>Noida, India</span>
                </div>
              </div>
            </div>

            <form action='' className='contact__form grid'>
              <div className='contact__inputs grid'>
                <div className='contact__content'>
                  <label htmlFor='' className='contact__label'>
                    Name
                  </label>
                  <input type='text' className='contact__input' />
                </div>

                <div className='contact__content'>
                  <label htmlFor='' className='contact__label'>
                    Email
                  </label>
                  <input type='email' className='contact__input' />
                </div>
              </div>
              <div className='contact__content'>
                <label htmlFor='' className='contact__label'>
                  Project
                </label>
                <input type='text' className='contact__input' />
              </div>
              <div className='contact__content'>
                <label htmlFor='' className='contact__label'>
                  Message
                </label>
                <textarea
                  name=''
                  id=''
                  cols={0}
                  rows={7}
                  className='contact__input'
                ></textarea>
              </div>

              <div>
                <a href='#' className='button button--flex'>
                  Send Message
                  <i className='uil uil-message button__icon'></i>
                </a>
              </div>
            </form>
          </div>
        </section>

        <a href='#' className='scrollup' id='scroll-up'>
          <i className='uil uil-arrow-up scrollup__icon'></i>
        </a>

        <footer className='absolute bottom-2 text-gray-700'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
            Theodorus Clarence
          </UnderlineLink>
        </footer>
      </main>
    </Layout>
  );
}
