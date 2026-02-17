import React from 'react'
import { heroIcons } from '../constant/data'
import Button from './Button'
import { BackgroundGradient } from './ui/BackgroundGradient'


// motion

import { motion } from 'motion/react'
import { fadeIn, fadeInUp, staggerContainer } from './motion/animation'

const Hero = () => {
  return (
    <section className='py-28 lg:pt-40' id='home'>
        <motion.div 
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{once: true}}
          className="container flex flex-col items-center">
            {/* image */}
            <motion.div variants={fadeIn}>
            <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900">
            <figure className='rounded-full overflow-hidden'>
                <img src="/images/portfolio_hero.png" alt="Muhamed Shahid"  width={452} height={452}/>
            </figure>
            </BackgroundGradient>
            </motion.div>
            <div className='text-center mt-8'>
              <motion.h1 variants={fadeInUp} className='text-3xl lg:text-5xl mb-1.5 font-bold'>Hi,I'm Muhamed Shahid.</motion.h1>
              <motion.h2 variants={fadeInUp}>Web Developer</motion.h2>
              <motion.p variants={fadeInUp} className='max-w-[820px] mx-auto mt-4 mb-6'>I'm Muhamed Shahid, a motivated web developer specializing in React. With a strong foundation in JavaScript and modern web technologies, I aim to design scalable and user-friendly interfaces. My portfolio project reflects my journey of learning, problem-solving, and building impactful web solutions.</motion.p>

              <motion.div variants={fadeIn} className="flex items-center justify-center gap-5">
                {heroIcons.map(icon => (
                  <a href="#" target='-blank' className='hover:text-indigo-400 transition-colors'>
                    <icon.icon size={30}/>
                  </a>
                ))}
              </motion.div>
              {/* btn wrapper */}
              <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center flex-wrap gap-5">
                <Button label="Download CV" classes="primary-btn" icon href="public\Shahid-Resume.pdf" download="Muhamed_Shahid_CV.pdf"/>
                <Button label="Let's Collaborate" classes="secondary-btn"/>
              </motion.div>
            </div>
        
            {/* content */}
           

        </motion.div>
    </section>
  )
}

export default Hero