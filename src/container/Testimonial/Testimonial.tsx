import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/motionWrap"

import { Testimonial as TestimonialInterface } from 'types/types';
import { Brand as BrandInterface } from 'types/types';



export interface TestimonialProps {
    data: TestimonialInterface[]
    brands: BrandInterface[]
}

const Testimonial = ({ data, brands }: TestimonialProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
            {data.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={data[currentIndex].image.url} alt={data[currentIndex].name} />
                        <div className="app__testimonial-content">
                            <p className="p-text">{data[currentIndex].feedback}</p>
                            <div>
                                <h4 className="bold-text">{data[currentIndex].name}</h4>
                                <h5 className="p-text">{data[currentIndex].company}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? data.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleClick(currentIndex === data.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
            <div className="app__testimonial-brands app__flex">
                {brands.map((brand, index) => {
                    const { name, image } = brand
                    return (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            key={index}
                        >
                            <img src={image.url} alt={name} />
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg',
)