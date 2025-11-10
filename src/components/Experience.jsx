import React from 'react'
import { ResumeItems } from '../constant/data'

const Experience = () => {
  return (
    <section className='section'> 
        <div className="container">
            <h2>My Resume</h2>
            {/* Wrapper */}
            <div className="">
              {ResumeItems.map((item) => (
                <div key={item.id}>
                  {/* Title */}
                  <h3>{item.title}</h3>

                  {/* List */}
                  <div>
                    {item.list.map((listItem, index)=>(
                      <div key={index}>
                        <div>
                        <h4 className="">{listItem.role}</h4>
                        <p>{listItem.label}</p>
                        </div>
                        <p>{listItem.time}</p>
                      </div>
                    )
                  )}
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Experience