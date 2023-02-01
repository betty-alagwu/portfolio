import React from 'react'
import { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import AppWrap from "../../wrapper/AppWrap"
import { Work as WorkInterface } from 'types/types';
import MotionWrap from '@/wrapper/motionWrap';

export interface Workprops {
  data: WorkInterface[];
}

const Work = ({ data }: Workprops) => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [filteredData, setFilteredData] = useState<WorkInterface[]>(data);



  const handdleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
  
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
  
      if (item === 'All') {
        setFilteredData(data);
      } else {
        setFilteredData(data.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };


  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio </span>
      </h2>
      <div className="app__work-filter">
        {['UX/UI', 'Web App', 'React JS', 'All'].map((item, index) => (
          <div className={`app__work-filter-item app__flex p-tex ${activeFilter === item ? 'item-active' : ''}`}
            key={index}
            onClick={() => handdleWorkFilter(item)}>
            {item}
          </div>
        ))}

      </div>
      <motion.div className="app__work-portfolio"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}>
        {filteredData.map((work, index) => {
          const { title, image, projectLink, codeLink, tags } = work;

          return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={image.url} alt={title} />
                <motion.div className="app__work-hover app__flex"
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}>
                  <a href={projectLink} className="" target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
                </motion.div>
              </div>
              <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{tags}</p>
              </div>
            </div>
            </div>
          )})}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
  )



