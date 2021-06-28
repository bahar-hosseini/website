import React from "react"


function EduExp(){
  return(<div id='resume'>
    <div className="bg-light py-5 ">
        <div className="text-center animate__animated animate__bounce titleGroup">
            <h2 className="pb-2 "><span>RE</span>SUME</h2>
            <div><button className="btn text-center rounded-pill " type="submit " name="button ">DOWNLOAD CV <i className="far fa-file "></i>
               </button></div>

        </div>
    </div>


    <section>
        <div className="container-fluid">
            <div className="row bgResume p-5">
                <div className="col-lg-6 ">
                    <table className="table table-hover">
                        <thead className="EXP-EDU">
                            <tr>
                                <th scope="col ">
                                    <h2 class="text-center py-1">EDUCATION</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="backgroundTable">
                            <tr>
                                <div>
                                    <th scope="row ">
                                        <ul className="timeline ">
                                            <li>
                                                <h1>New Web Design</h1>
                                                <a href="# " className="float-right ">21 March, 2014</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                                            </li>
                                            <li>
                                                <a href="# ">21 000 Job Seekers</a>
                                                <a href="# " className="float-right ">4 March, 2014</a>
                                                <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                                            </li>
                                            <li>
                                                <a href="# ">Awesome Employers</a>
                                                <a href="# " className="float-right ">1 April, 2014</a>
                                                <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
                                            </li>
                                        </ul>
                                    </th>
                                </div>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <div className="col-lg-6 ">
                    <table className="table table-hover ">
                        <thead className="EXP-EDU ">
                            <tr>
                                <th scope="col ">
                                    <h2 className="text-center py-1">EXPERIENCE</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="backgroundTable">
                            <tr>
                                <div>
                                    <th scope="row ">
                                        <ul className="timeline ">
                                            <li>
                                                <h2>New Web Design</h2>
                                                <h3>21 March, 2014</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                                            </li>
                                            <li>
                                                <a href="# ">21 000 Job Seekers</a>
                                                <a href="# " className="float-right ">4 March, 2014</a>
                                                <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                                            </li>
                                            <li>
                                                <a href="# ">Awesome Employers</a>
                                                <a href="# " className="float-right ">1 April, 2014</a>
                                                <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
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

  </div>)
}
export default EduExp;
