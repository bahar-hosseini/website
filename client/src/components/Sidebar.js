import React from 'react'

function Sidebar() {
  return (
    <div>
      <section className='sidebar'>
        <div className='text-center'>
          <table style={{ backgroundColor: '#FECE2E' }} className='table'>
            <tbody>
              <tr>
                <th className='px-2 py-4' scope='col'>
                  <a
                    href='https://github.com/bahar-hosseini'
                    className='fab fa-github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {' '}
                  </a>
                </th>
              </tr>
              <tr>
                <th className='px-2 py-4' scope='col'>
                  <a
                    href='https://www.linkedin.com/in/bahar-hosseini/'
                    className='fab fa-linkedin'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {' '}
                  </a>
                </th>
              </tr>
              <tr>
                <th className='px-2 py-3' scope='col'>
                  <a
                    href='mailto:bahar.hosseini@gmail.com'
                    className='fas fa-envelope-square'
                    rel='noreferrer'
                  ></a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Sidebar
