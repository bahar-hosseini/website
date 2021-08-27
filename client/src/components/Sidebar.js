import React from "react"

function Sidebar() {

    return ( <div >
        <section id = "sidebar" >
        <div className = "col-lg-1 col-md-2 col-sm-3 text-center" >
        <table className = "table bg-warning" >
        <tbody>
        <tr >
        <th className = "px-2 py-3" scope = "col" >
         <i className = "fab fa-github" ></i> 
        </th>
        </tr>
        <tr>
        <th className = "px-2 py-3" scope = "col"><i className = "fab fa-linkedin " > </i></th>
        </tr>
        <tr>
        <th className = "px-2 py-3" scope = "col"><i className = "fab fa-telegram "> </i></th>
        </tr>
        </tbody>
        </table>
        </div>
        </section>
        </div>
    )
}

export default Sidebar;