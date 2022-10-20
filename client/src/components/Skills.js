import React from 'react'

function Skills() {
  return (
    <div>
      <div className='bg-light py-3'>
        <div className=' row text-center animate__animated animate__bounce titleGroup'>
          <h2>
            {' '}
            <span>S</span>KILLS
          </h2>
          <i className='fas fa-magic '></i>
        </div>
      </div>
      <div class=''>
        <div className='row skillTable bg-skills p-lg-1'>
          <div className='container col-lg-6 table-responsive-lg p-3 '>
            <table className='table table-hover table-sm mr-5'>
              <thead class='table-dark '>
                <tr>
                  <th scope='col'>Languages</th>
                  <th scope='col' colspan='6'>
                    Frameworks / Libraries
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row '>JavaScript</th>
                  <td>React</td>
                  <td>Redux</td>
                  <td>Next.js</td>
                  <td>JQuery</td>
                  <td>TypeScript</td>
                  <td>Gatsby</td>
                </tr>
                <tr>
                  <th scope='row '>NodeJS</th>
                  <td>ExpressJS</td>
                  <td>WebSockets</td>
                  {/* <td>template engine: pug, ejs, handlebars</td> */}
                  <td>EJS</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope='row '>Ruby</th>
                  <td>Ruby on Rails</td>
                </tr>
                <tr>
                  <th scope='row '>HTML & CSS</th>
                  <td>LESS</td>
                  <td>SASS/SCSS</td>
                  <td>Bootstrap</td>
                  <td>Material-UI</td>
                  <td>Semantic UI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='container col-lg-6 p-3 table-responsive'>
            <table className='table table-hover table-sm mr-5'>
              <thead className='table-dark '>
                <tr>
                  <th scope='col ' colspan='6'>
                    Other Skills
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row '>Linux</th>
                  <td>ubuntu</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope='row '>Docker</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope='row '>Git</th>
                  <td>GitHub</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* <tr>
                            <th scope="row "></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr> */}
                <tr>
                  <th scope='row '>Heroku</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <th scope='row '>cloud services: AWS</th>
                  <td>Lambda</td>
                  <td>S3</td>
                  <td>EC2</td>
                  <td>AWS API Gateway</td>
                </tr>
                <tr>
                  <th scope='row '>Scrum</th>
                  <td>agile</td>
                  <td>waterfall</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=' container col-lg-6 p-3 table-responsive '>
            <table className='table table-hover table-sm mr-3'>
              <thead className='table-dark '>
                <tr>
                  <th scope='col ' colspan='5 '>
                    Databases
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row '>SQL</th>
                  <td>SQL Server</td>
                  <td>PostgreSQL</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope='row '>NoSQL</th>
                  <td>MongoDB</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='container col-lg-6 p-3 table-responsive '>
            <table className='table table-hover table-sm mr-3'>
              <thead className='table-dark '>
                <tr>
                  <th scope='col' colspan='6'>
                    Automated Testing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row '>NodeJS & JavaScript & React</th>
                  <td>Mocha</td>
                  <td>Chai</td>
                  <td>Jest</td>
                  <td>Cypress</td>
                  <td>Storybook</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
