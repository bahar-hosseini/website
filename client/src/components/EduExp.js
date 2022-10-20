import React from 'react'

function EduExp() {
  return (
    <div id='resume'>
      <div className='bg-light py-3 '>
        <div className='text-center animate__animated animate__bounce titleGroup'>
          <h2 className='pb-2 '>
            <span>RE</span>SUME
          </h2>
          <div>
            <button
              className='btn text-center rounded-pill '
              type='submit '
              name='button '
            >
              <a
                style={{ color: 'inherit' }}
                href='Bahar_Hosseini_Resume.pdf'
                download
                className='far fa-file '
              >
                {' '}
                DOWNLOAD CV{' '}
              </a>
            </button>
          </div>
        </div>
      </div>

      <section>
        <div className=''>
          <div className='row bgResume'>
            <div className='container col-lg-6 py-5 pr-5 pl-5'>
              <table className='table table-hover'>
                <thead className='EXP-EDU'>
                  <tr>
                    <th scope='col'>
                      <h3 class='text-center'>EDUCATION</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className='backgroundTable'>
                  <tr>
                    <div>
                      <th scope='row '>
                        <ul className='timeline '>
                          <li>
                            <h4>Diploma of Education</h4>
                            <p>Lighthouse Labs</p>
                          </li>
                          <li>
                            <h4>Master of Industrial Engineering</h4>
                            {/* <a href="# " className="float-right ">21 March, 2014</a> */}
                            <p>Science and Research, Tehran, Iran</p>
                          </li>
                          <li>
                            <h4>Bachelors of Industrial Engineering</h4>
                            {/* <a href="# ">21 000 Job Seekers</a>
                                                <a href="# " className="float-right ">4 March, 2014</a> */}
                            <p>
                              Iran University of Science and Technology- Tehran,
                              Iran
                            </p>
                          </li>
                          <li>
                            <a href='# '>Awesome Employers</a>
                            <a href='# ' className='float-right '>
                              1 April, 2014
                            </a>
                            <p>
                              Fusce ullamcorper ligula sit amet quam accumsan
                              aliquet. Sed nulla odio, tincidunt vitae nunc
                              vitae, mollis pharetra velit. Sed nec tempor
                              nibh...
                            </p>
                          </li>
                        </ul>
                      </th>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='container col-lg-6 py-5 pr-5'>
              <table className='table table-hover '>
                <thead className='EXP-EDU '>
                  <tr>
                    <th scope='col'>
                      <h3 className='text-center py-1'>EXPERIENCE</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className='backgroundTable'>
                  <tr>
                    <div>
                      <th scope='row '>
                        <ul className='timeline '>
                          <li>
                            <h4>Project Manager</h4>
                            <h6>
                              <b>Pishro Cloud Computing - Tehran, Iran</b>
                            </h6>
                            <ul>
                              <li>
                                Managing project plans using Jira and MSP to
                                ensure each team meets their objectives and
                                product delivery timelines.
                              </li>
                              <li>
                                Delivering product tests with the technical team
                                to detect software bugs.
                              </li>
                              <li>
                                Effectively collaborating with DevOps,
                                Front-End, and Back-End teams
                              </li>
                              <li>
                                Contributing functional and technical support to
                                end-users in testing environments including
                                investigating system errors and using Horizon
                                (Open Stack) to launch virtual machine
                                instances.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4>Assistant Project Manager</h4>
                            <h6>
                              <b>Sharif ICT Innovation Center-Tehran, Iran</b>
                            </h6>
                            <ul>
                              <li>
                                Providing vital daily and periodic project
                                progress and status reports to top management
                                and stakeholders.
                              </li>
                              <li>
                                Performing quality assurance and testing to
                                ensure the quality of the system is maintained.
                              </li>
                              <li>
                                Managing tickets and logging daily IT issues to
                                successfully addressing the users' issues on
                                time.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4>Project Coordinator </h4>
                            <h6>
                              <b>Senobar Printing House</b>
                            </h6>
                            <ul>
                              <li>
                                Creating WBS and managing time, scope, and cost
                                constraints.
                              </li>
                              <li>
                                Preparing project documents and generating
                                reports for stakeholders.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </th>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default EduExp
