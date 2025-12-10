import React from 'react'
import { aboutItems } from '../constant/data'



// motion

import { motion } from 'motion/react'
import { fadeInUp, staggerContainer } from './motion/animation'

const About = () => {
  return (
    <section className='section bg-secondary-clr' id='about'>
        <motion.div
        variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once: true}}
                   className="container">
            <motion.h2 variants={fadeInUp}>About me</motion.h2>
            <motion.p variants={fadeInUp} className="mt-3 mb-9">
                I'm a MERN stack developer passionate about building interactive and efficient web applications. Currently pursuing my studies in full-stack development after completing my Bachelor of Computer Applications (BCA), I focus on crafting clean, responsive, and user-friendly interfaces with React, JavaScript, and modern CSS frameworks.

My skills include frontend development, API integration, and component-based architecture, with a growing interest in backend technologies like Node.js and MongoDB. I aim to write maintainable code and design seamless user experiences while continuously learning and improving as a developer.
            </motion.p>
            <div>
                <motion.p variants={fadeInUp} className='text-white font-semibold text-xl mb-3'>Skills:</motion.p>
                <motion.ul variants={fadeInUp} className="">
                    {aboutItems.map((item) => (
                        <li key={item.id}>
                            <p>💠{item.label}</p>

                        </li>
                    ))}
                </motion.ul>
            </div>
        </motion.div>
    </section>
  )
}

export default About