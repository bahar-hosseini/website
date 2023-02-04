import React from 'react';

function About() {
  return (
    <div>
      {/* <div>
    <img className = "float-end femaleImage col-lg-3 col-md-5 col-sm-3 pl-4" src={'/images/female.png'} alt='female-tech' />
        <img className = "float-end col-lg-4 col-md-5 col-sm-3" src={'/images/yellow-shape.png'} alt='robot' />
    </div> */}

      <div id='about' className='about'>
        <div className=' container-fluid px-2 about-container py-3'>
          <div className='row align-items-center'>
            <img
              className='img-fluid col-lg-4 col-md-3 col-sm-2 profileBahar p-5'
              src={'/images/bahar.png'}
              alt=' Home IMG '
            />
            <div className='col-lg-8 col-sm-9'>
              <div className=' row text-center justify-content-start d-lg-inline-block animate__animated animate__bounce titleGroup '>
                <div className='mb-5 titleGroup'>
                  <h2 className='text-center text-light py-3 '>
                    {' '}
                    <span>ABOUT</span> ME
                  </h2>
                  <p className='text-light lead  pr-5'>
                    {' '}
                    I am a passionate full-stack developer who loves solving
                    real-world problems using software. I have experience
                    working in different teams in high-tech IT companies, which
                    helps me to look at problems from different angles. I enjoy
                    writing clean, readable code and creating websites that are
                    easy to navigate. My goal is not only to grow as an
                    individual, but also to help my team grow and succeed.
                  </p>
                  <hr className='about-line text-center '></hr>
                  <div className='text-white row '>
                    <div className='col '>
                      <h4>Location</h4>
                      <p>Ontario, Canada </p>
                    </div>
                    <div className='col'>
                      <h4>Email</h4>
                      <p>Bahar.Hosseini@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
