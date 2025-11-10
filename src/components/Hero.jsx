import React from 'react'
import { heroIcons } from '../constant/data'
import Button from './Button'
import { BackgroundGradient } from './ui/BackgroundGradient'

const Hero = () => {
  return (
    <section className='py-28 lg:pt-40'>
        <div className="container flex flex-col items-center">
            {/* image */}
            <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900">
            <figure className='rounded-full overflow-hidden'>
                <img src="/images/avatar.png" alt="Muhamed Shahid"  width={452} height={452}/>
            </figure>
            </BackgroundGradient>
            <div className='text-center mt-8'>
              <h1 className='text-3xl lg:text-5xl mb-1.5 font-bold'>Hi,I'm Muhamed Shahid.</h1>
              <h2>Web Developer</h2>
              <p className='max-w-[820px] mx-auto mt-4 mb-6'>I'm Muhamed Shahid, a motivated web developer specializing in React. With a strong foundation in JavaScript and modern web technologies, I aim to design scalable and user-friendly interfaces. My portfolio project reflects my journey of learning, problem-solving, and building impactful web solutions.</p>

              <div className="flex items-center justify-center gap-5">
                {heroIcons.map(icon => (
                  <a href="#" target='-blank' className='hover:text-indigo-400 transition-colors'>
                    <icon.icon size={30}/>
                  </a>
                ))}
              </div>
              {/* btn wrapper */}
              <div className="mt-10 flex items-center justify-center flex-wrap gap-5">
                <Button label="Download CV" classes="primary-btn" icon/>
                <Button label="Let's Collaborate" classes="secondary-btn"/>
              </div>
            </div>
        
            {/* content */}
           

        </div>
    </section>
  )
}

export default Hero