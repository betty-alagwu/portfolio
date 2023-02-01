import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import AppWrap from "../../wrapper/AppWrap"



const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};


const Header = () => {
    return (
        <div className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                className="app__header-info">
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className='head-text'>Betty</h1>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        <p className="p-text">Software Engineer</p>
                        <p className="p-text">Technical Writter</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delayChildren: 0.5 }}
                className="app__header-img">
                <img src={images.profile.src} />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="overlay_circle"
                    src={images.circle.src}
                    alt="profile_circle"
                />
            </motion.div>

            <motion.div
                className="app__header-circles"
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}>
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle.src} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home')