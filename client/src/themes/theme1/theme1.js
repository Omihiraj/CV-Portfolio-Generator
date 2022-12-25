// import { useContext } from "react"
// import { ThemeContext } from "../context_theme"

import { Link, Element } from 'react-scroll'

export const Theme1 = ()=>{
    //const item = useContext(ThemeContext)
    const first = {
        height:'1000px',
        color:'red'
    }
    const second = {
        height:500,
        color:'green'
    }
    return (
        <div>

        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
          Test 1
        </Link>

        <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} delay={500}>
          Test 2 (delay)
        </Link>
        
        

        <Element name="test1" className="element" style={first}>
          test 1
        </Element>

        <Element name="test2" className="element" style={second}>
          test 2
        </Element>
        </div>
    )
}

