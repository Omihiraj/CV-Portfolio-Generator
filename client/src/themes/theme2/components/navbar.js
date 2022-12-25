import { Link } from 'react-scroll'
export const NavBar = ()=>{
    return(
        <nav className='bg-navbg py-2.5 fixed  bg-top w-full z-20'>
            <div className=' flex flex-row justify-end py-5'>
                <ul className=' flex flex-row justify-end mt-1.5'>
                
                    <li className="text-white pr-10">
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className="text-white pr-10">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                            About
                        </Link>
                    </li>
                    <li className="text-white pr-10">
                        <Link activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500} >
                            Services
                        </Link>
                    </li>
                    <li className="text-white pr-10">
                        <Link activeClass="active" to="education" spy={true} smooth={true} offset={50} duration={500} >
                            Education
                        </Link>
                    </li>
                    <li className="text-white pr-10">
                        <Link activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500} >
                            Experience
                        </Link>
                    </li>
                    <li className="text-white pr-10">
                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li className="text-white pr-10">
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} >
                            Projects
                        </Link>
                    </li>
                </ul>
                <button className='bg-secondarypink text-white mr-10 py-1.5 px-6'>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
                        Hire Me {'>'}
                    </Link>
                 </button>
            </div>
            
        </nav>
    )
}