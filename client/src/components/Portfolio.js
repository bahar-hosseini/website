import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Portfolio = () => {
  const slideImages = [
    '/images/01-campr.png',
    '/images/buy-sell-listing-website.png',
    '/images/game-station.png',
    '/images/jungle-rails.png',
    '/images/scheduler.gif',
    '/images/tweeter.png',
  ];

  return (
    <div>
      <div className='bg-light py-3'>
        <div className='text-center  animate__animated animate__bounce titleGroup'>
          <h2>
            {' '}
            <span>MY</span> PORTFILIO
          </h2>
          {/* <h6>Click on a product to learn more</h6> */}
          <h1>
            <i className='fas fa-inbox '></i>
          </h1>
        </div>
      </div>

      <div className='bgPortfolio container-fluid'>
        <div className='align-self-center text-center'>
          <div className='row'>
            <div id='typewrite' className='text-center titleGroup p-5'>
              <h3>Click on a product to learn more</h3>
            </div>
            <Slide easing='ease' className='slider'>
              <a
                style={{ color: 'inherit' }}
                href='https://github.com/bahar-hosseini/camping-app'
                target='_blank'
                rel='noreferrer'
              >
                <div className='each-slide'>
                  <div
                    style={{
                      backgroundImage: `url(${slideImages[0]})`,
                    }}
                  ></div>

                  {/* <button
                    className='btn text-center rounded-pill my-3'
                    type='submit '
                    name='button '
                  >
                    <a
                      style={{ color: 'inherit' }}
                      href='https://github.com/bahar-hosseini/camping-app'
                      target='_blank'
                      rel='noreferrer'
                    >
                      cmpr
                    </a>
                  </button> */}
                </div>
              </a>
              <a
                style={{ color: 'inherit' }}
                href='https://github.com/bahar-hosseini/buy-sell-listing-website'
                target='_blank'
                rel='noreferrer'
              >
                <div className='each-slide'>
                  <div
                    style={{
                      backgroundImage: `url(${slideImages[1]})`,
                      // borderRadius: '30px',
                    }}
                  ></div>
                  {/* <button
                    className='btn text-center rounded-pill my-3'
                    name='button '
                  >
                    <a
                      style={{ color: 'inherit' }}
                      href='https://github.com/bahar-hosseini/buy-sell-listing-website'
                      target='_blank'
                      rel='noreferrer'
                    >
                      buy-sell-listing-website
                    </a>
                  </button> */}
                </div>
              </a>
              <a
                style={{ color: 'inherit' }}
                href='https://github.com/bahar-hosseini/online_shop'
                target='_blank'
                rel='noreferrer'
              >
                <div className='each-slide'>
                  <div
                    style={{
                      backgroundImage: `url(${slideImages[2]})`,
                    }}
                  ></div>
                </div>
              </a>
              <a
                style={{ color: 'inherit' }}
                href='https://github.com/bahar-hosseini/jungle-rails'
                target='_blank'
                rel='noreferrer'
              >
                <div className='each-slide'>
                  <div
                    style={{
                      backgroundImage: `url(${slideImages[3]})`,
                    }}
                  ></div>
                  {/* <button
                    className='btn text-center rounded-pill my-3'
                    name='button '
                  >
                    <a
                      style={{ color: 'inherit' }}
                      href='https://github.com/bahar-hosseini/jungle-rails'
                      target='_blank'
                      rel='noreferrer'
                    >
                      jungle-rails
                    </a>
                  </button> */}
                </div>
              </a>
              <a
                style={{ color: 'inherit' }}
                href='https://github.com/bahar-hosseini/scheduler'
                target='_blank'
                rel='noreferrer'
              >
                <div className='each-slide'>
                  <div
                    style={{
                      backgroundImage: `url(${slideImages[4]})`,
                    }}
                  ></div>
                  {/* <button
                    className='btn text-center rounded-pill my-3'
                    name='button '
                  >
                    <a
                      style={{ color: 'inherit' }}
                      href='https://github.com/bahar-hosseini/scheduler'
                      target='_blank'
                      rel='noreferrer'
                    >
                      scheduler
                    </a>
                  </button> */}
                </div>
              </a>
              <a
                style={{ color: 'inherit' }}
                href='https://github.com/bahar-hosseini/tweeter'
                target='_blank'
                rel='noreferrer'
              >
                <div className='each-slide'>
                  <div
                    style={{
                      backgroundImage: `url(${slideImages[5]})`,
                    }}
                  ></div>
                  {/* <button
                    className='btn text-center rounded-pill my-3'
                    name='button '
                  >
                    <a
                      style={{ color: 'inherit' }}
                      href='https://github.com/bahar-hosseini/tweeter'
                      target='_blank'
                      rel='noreferrer'
                    >
                      tweeter
                    </a>
                  </button> */}
                </div>
              </a>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
