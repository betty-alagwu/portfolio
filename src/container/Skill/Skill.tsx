import React from 'react'
import { motion } from 'framer-motion';
import AppWrap from "../../wrapper/AppWrap"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {
    Skills as SkillsInterface,
    Experiences as experiencesInterface,
    WorkExperience as WorkExperienceInterface
} from 'types/types';
import MotionWrap from '@/wrapper/motionWrap';

export interface Skillsprops {
    data: SkillsInterface[];
    experiences: experiencesInterface[];
    workExperience: WorkExperienceInterface[]
}


const Skill = ({ data, experiences, workExperience }: Skillsprops) => {
    return (
        <>
            <h2 className="head-text">
                Skills & Experiences
            </h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {data.map((skill, index) => {
                        const { name, icon, bgColor } = skill
                        return (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className="app__skills-item app__flex"
                                key={index}>
                                <div
                                    className="app__flex"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    <img src={icon.url} alt={name} />
                                </div>
                                <p className="p-text">{name}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience, index) => {
                        const { year } = experience
                        return (
                            <motion.div
                                className="app__skills-exp-item"
                                key={index}
                            >
                                <div className="app__skills-exp-year">
                                    <p className="bold-text">{year}</p>
                                </div>
                                <motion.div className="app__skills-exp-works">
                                    {workExperience.map((work, index) => {
                                        const { name, company, description } = work
                                        return (
                                            <>
                                                <motion.div
                                                    whileInView={{ opacity: [0, 1] }}
                                                    transition={{ duration: 0.5 }}
                                                    className="app__skills-exp-work"
                                                    data-tip
                                                    data-for={name}
                                                    key={index}
                                                >
                                                    <h4 className="bold-text">{name}</h4>
                                                    <p className="p-text">{company}</p>
                                                </motion.div>
                                                <ReactTooltip
                                                    id={name}
                                                    className="skills-tooltip"
                                                >
                                                    {description}
                                                </ReactTooltip>
                                            </>
                                        )
                                    })}
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skill, 'app__skills'),
    'skills',
    'app__whitebg',
)
