import React,{useEffect, useRef} from 'react'
import {findDOMNode} from 'react-dom'
import $ from 'jquery'


function AnimateText({children}) {

    const text=useRef(null)
    useEffect(()=>{
        $(findDOMNode(text.current)).animate('slow')
    },[]);
    return (
        <div ref={text}>
            {children}
        </div>
    )
}

export default AnimateText
