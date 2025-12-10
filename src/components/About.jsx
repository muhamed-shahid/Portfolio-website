import React from 'react'
import { aboutItems } from '../constant/data'

const About = () => {
  return (
    <section className='section bg-secondary-clr' id='about'>
        <div className="container">
            <h2>About me</h2>
            <p className="mt-3 mb-9">
                I'm a MERN stack developer passionate about building interactive and efficient web applications. Currently pursuing my studies in full-stack development after completing my Bachelor of Computer Applications (BCA), I focus on crafting clean, responsive, and user-friendly interfaces with React, JavaScript, and modern CSS frameworks.

My skills include frontend development, API integration, and component-based architecture, with a growing interest in backend technologies like Node.js and MongoDB. I aim to write maintainable code and design seamless user experiences while continuously learning and improving as a developer.
            </p>
            <div>
                <p className='text-white font-semibold text-xl mb-3'>Skills:</p>
                <ul className="">
                    {aboutItems.map((item) => (
                        <li key={item.id}>
                            <p>💠{item.label}</p>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About