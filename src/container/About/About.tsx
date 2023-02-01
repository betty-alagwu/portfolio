import React, { FC } from 'react'
import { motion } from 'framer-motion';
import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/motionWrap"
import { About as AboutInterface } from 'types/types';


export interface Aboutprops {
    data: AboutInterface[];
}


const About = ({ data }: Aboutprops) => {
    // console.log({data}, 'This is the about componet')

    return (
        <>
            <h2 className="head-text">I Know that <span>Good Design</span>
                <br />
                means
                <span>Good Business</span>
            </h2>

            <div className="app__profiles">
                {data.map((items, index) => {
                    const { title, description, image } = items


                    return (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="app__profile-item"
                            key={title + index}
                        >
                            {image && <img src={image.url} alt={title} />}
                            <h2 className="bold-text" style={{ marginTop: 20 }}>{title}</h2>
                            <p className="p-text" style={{ marginTop: 10 }}>{description}</p>
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
}




export default AppWrap<Aboutprops>(
    MotionWrap(About, 'app__about'), 
    'about', 'app__whitebg'
    )