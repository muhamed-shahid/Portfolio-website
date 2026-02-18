import React, { useRef, useState, useEffect } from 'react'
import { contactItems } from '../constant/data'
import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react'

import emailjs from '@emailjs/browser'

// motion

import { motion } from 'motion/react'
import { fadeIn, fadeInUp, staggerContainer } from './motion/animation'

const Contact = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      if (publicKey) {
        emailjs.init(publicKey)
      }
    }, [])

  return (
    <section className='py-20' id='contact'>
        <motion.div 
        variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once: true}}
                  className='container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800'>
        {/* content */}
        <div >
            <motion.h2 variants={fadeInUp}>Get In Touch</motion.h2>
            <motion.p variants={fadeInUp} className='mt-3.5 mb-7'>
                Ready to work on your next project. Let's discuss how I can help bring your ideas to life.
            </motion.p>
            {/* List */}
            <motion.ul variants={fadeInUp}>
                {contactItems.map((item)=> (
                    <li key={item.id} className='flex items-center gap-1.5'>
                        <p className='text-white font-semibold'>{item.label}</p>
                        <a href="#">{item.link}</a>

                    </li>
                    
                ))}
            </motion.ul>

            {/* Social Profiles */}

            <motion.div variants={fadeIn} className="flex items-center gap-2 mt-6">
                <a href="https://www.linkedin.com/in/muhamed-shahid" target="_blank" rel="noopener noreferrer" className='hover:text-neutral-300 transition-colors' aria-label="LinkedIn">
                    <RiLinkedinBoxFill size={30}/>
                </a>
                <a href="https://github.com/muhamed-shahid" target="_blank" rel="noopener noreferrer" className='hover:text-neutral-300 transition-colors' aria-label="GitHub">
                    <RiGithubFill size={30}/>
                </a>
            </motion.div>
        </div>
                <div>
                        {/* form */}

                <motion.form
                    variants={fadeIn}
                    onSubmit={async (e) => {
                        e.preventDefault()
                        if (!nameRef.current || !emailRef.current || !messageRef.current) return

                        const name = nameRef.current.value.trim()
                        const email = emailRef.current.value.trim()
                        const message = messageRef.current.value.trim()
                        if (!name || !email || !message) return

                        setSending(true)

                        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
                        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

                        if (!serviceID || !templateID) {
                          setError(true)
                          setTimeout(() => setError(false), 4000)
                          setSending(false)
                          return
                        }

                        const templateParams = {
                            from_name: name,
                            from_email: email,
                            message,
                        }

                        try {
                            await emailjs.send(serviceID, templateID, templateParams)
                            setSent(true)
                            setTimeout(() => setSent(false), 3000)
                            // reset form
                            nameRef.current.value = ''
                            emailRef.current.value = ''
                            messageRef.current.value = ''
                        } catch (err) {
                            console.error('Email send error', err)
                            setError(true)
                            setTimeout(() => setError(false), 4000)
                        } finally {
                            setSending(false)
                        }
                    }}
                    className='grid gap-5'
                >
                        <div className='grid gap-2'>
                                <label htmlFor="name">Name *</label>
                                <input
                                 ref={nameRef}
                                 id="name"
                                 name="name"
                                 type="text"
                                 placeholder='Your name'
                                 className='name'
                                 required />
                        </div>
                        <div className='grid gap-2'>
                                <label htmlFor="email">Email *</label>
                                <input ref={emailRef} id="email" name="email" type="email" placeholder='Your email' className='email' required />
                        </div>
                        <div className='grid gap-2'>
                                {/* Text area */}
                                <label htmlFor="message">Message *</label>
                                <textarea ref={messageRef} id="message" name="message" placeholder='Message' className='h-40 border border-neutral-800 indent-4 py-2 resize-none' required/>

                        </div>
                        <button className="primary-btn max-w-max" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
                </motion.form>

                {/* Success / error popup */}
                {sent && (
                    <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
                        Message sent successfully
                    </div>
                )}
                {error && (
                    <div className="fixed bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded shadow-lg">
                        Failed to send message
                    </div>
                )}
                </div>
        </motion.div>
    </section>
  )
}

export default Contact