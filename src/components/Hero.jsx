import React from 'react'
import { heroIcons } from '../constant/data'
import Button from './Button'

const Hero = () => {
  return (
    <section>
        <div className="container">
            {/* image */}
            <figure>
                <img src="/images/hero-img.png" alt="Muhamed Shahid"  width={452} height={452}/>
            </figure>
            <div>
              <h1>Hi,I'm Muhamed Shahid.</h1>
              <h2>Web Developer</h2>
              <p>I'm Muhamed Shahid, a motivated frontend developer specializing in React. With a strong foundation in JavaScript and modern web technologies, I aim to design scalable and user-friendly interfaces. My portfolio project reflects my journey of learning, problem-solving, and building impactful web solutions.</p>

              <div className="">
                {heroIcons.map(icon => (
                  <a href="#" target='-blank'>
                    <icon.icon size={30}/>
                  </a>
                ))}
              </div>
              {/* btn wrapper */}
              <div className="">
                <Button label="Download CV" classes=""/>
                <Button label="Let's Collaborate" classes=""/>
              </div>
            </div>
        
            {/* content */}
           

        </div>
    </section>
  )
}

export default Hero