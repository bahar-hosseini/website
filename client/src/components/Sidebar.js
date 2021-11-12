import React from "react"

function Sidebar() {

    return ( <div >
        <section className = "sidebar" >
        <div className = "col-lg-3 col-md-2 col-sm-3 text-center" >
        <table className = "table bg-warning" >
        <tbody>
        <tr >
        <th className="px-2 py-4" scope = "col" >
         <a  href='https://github.com/bahar-hosseini' className = "fab fa-github" target="_blank"></a> 
        </th>
        </tr>
        <tr>
        <th className = "px-2 py-4" scope = "col">
        <a href='https://www.linkedin.com/in/maryam-hosseini-163310192/' className = "fab fa-linkedin" target="_blank" > </a>
        </th>
        </tr>
        <tr>
        <th className = "px-2 py-3" scope = "col">
        <a href="mailto:bahar.hosseini@gmail.com" className = "fas fa-envelope-square"></a>
        </th>
        </tr>
        </tbody>
        </table>
        </div>
        </section>
        </div>
    )
}

export default Sidebar;