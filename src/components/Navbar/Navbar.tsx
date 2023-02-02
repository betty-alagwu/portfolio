import { StaticImageData } from 'next/image';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import {images } from '../../constants'
import Link from 'next/link';



export interface ILogo {
    //   image: HTMLImageElement;
    src: string | StaticImageData;
    className?: string;
  }


const Navbar = () => {
const [toggle, setToggle] = useState(true)




    return (
        <nav className='app__navbar'>
            <div className="app__navbar-logo">
                <img src={images.logo.src} alt="Logo" />
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div/>
                        <Link href={`#${item}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)}/>
                {
                    toggle && (
                        <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{ duration: 0.85, ease: 'easeOut'}}>
                            <HiX onClick={() => setToggle(false)}/>
                            <ul className="app__navbar-links">
                                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                    <li className="app__flex p-text" key={`link-${item}`}>
                                        <div/>
                                        <a href={`#${item}`}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar