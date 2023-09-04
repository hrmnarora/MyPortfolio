import React from 'react'
import { Section } from './common/Section'
import avatar from "../assets/avatar2.png"

export const Testimonials = () => {
    const TESTIMONIALS = [
        {
            id:1,
            image: avatar,
            names:"Harsh Arora",
            comment: "A testimonial is an honest endorsement of your product or service that usuallyexperienced success as a result of the work you did for them",
        },{
            id:2,
            image: avatar,
            names:"Rahul Verma",
            comment: "A testimonial is an honest endorsement of your product or service that usuallyexperienced success as a result of the work you did for them",
        },{
            id:3,
            image: avatar,
            names:"john Doe",
            comment: "A testimonial is an honest endorsement of your product or service that usuallyexperienced success as a result of the work you did for them",
        },{
            id:4,
            image: avatar,
            names:"Azhar",
            comment: "A testimonial is an honest endorsement of your product or service that usuallyexperienced success as a result of the work you did for them",
        },
    ]
  return (
    <Section title="Testimonials 🤟" subtitle="See what Others Say abou My work">

        <div className='max-w-xl flex flex-col gap-8'>
            {TESTIMONIALS.map(({id,image,names,comment}) =>(
                <div key={id} className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                    <div className='w-1/3'>
                        <img src={image} alt={names}  className='w-20 h-20 object-cover object-top pt-2'/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>{names}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
  )
}
