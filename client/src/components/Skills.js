import React from "react"

function Skills(){
return(<div>
<div className="bg-light py-5">
        <div className=" row text-center animate__animated animate__bounce titleGroup">
            <h2> <span>S</span>KILLS</h2>
            <h4>GET IN TOUCH</h4>
            <i className="fas fa-magic "></i>
        </div>
    </div>
        <div className="container-fluid row bg-skills py-5">
            <div className="col-lg-6 table-responsive-lg">
                <table className="table table-hover table-sm ">
                    <thead class="table-dark ">
                        <tr>
                            <th scope="col">Languages</th>
                            <th scope="col" colspan="5">Frameworks / Libraries</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row ">JavaScript</th>
                            <td>React</td>
                            <td>Redux</td>
                            <td>Next.js</td>
                            <td>JQuery</td>
                            <td>TypeScript</td>
                        </tr>
                        <tr>
                            <th scope="row ">NodeJS</th>
                            <td>ExpressJS</td>
                            <td>WebSockets</td>
                            {/* <td>template engine: pug, ejs, handlebars</td> */}
                            <td>Ejs</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row ">-</th>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row ">HTML & CSS</th>
                            <td>LESS</td>
                            <td>SASS</td>
                            <td>Bootstrap</td>
                            <td>MorrisJS</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className=" col-lg-6 table-responsive flex-container ">
                <table className="table table-hover table-sm ">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col " colspan="5 ">Other Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row ">Linux</th>
                            <td>ubuntu</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row ">Docker</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row ">Git</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row ">GitHub</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row ">Heroku</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <th scope="row ">cloud services:AWS</th>
                            <td>Lambda</td>
                            <td>S3</td>
                            <td>EC2</td>
                            <td>AWS API Gateway</td>
                        </tr>
                        <tr>
                            <th scope="row ">Scrum</th>
                            <td>agile</td>
                            <td>waterfall</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-lg-6 table-responsive flex-container ">
                <table className="table table-hover table-sm ">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col " colspan="5 ">Databases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row ">SQL</th>
                            <td>SQL Server</td>
                            <td>PostgreSQL</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row ">NoSQL</th>
                            <td>MongoDB</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className=" col-lg-6 table-responsive flex-container ">
                <table className="table table-hover table-sm ">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col" colspan="5">Automated Testing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row ">NodeJS & JavaScript</th>
                            <td>Mocha</td>
                            <td>Chai</td>
                            <td>Jasmine</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</div>);
}
export default Skills;
