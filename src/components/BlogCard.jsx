import React from 'react'
import Button from './Button'

export function BlogCard({type="bg-dark",title, description, className}) {
    

    return (
        <div className={`${type==="bg-dark" ? "bg-primary text-light" : 'bg-primary-light text-primary'} px-[45px] py-[40px] gap-[20px] flex flex-col rounded-[25px] ${className}`}>
            <h4 className='text-lg font-bold'>{title}</h4>
            <div className='flex flex-col gap-[20px] items-end'>
            <p>{description}</p>
            <Button type={type==="bg-dark"?"cta-white":"cta"}>Explore Blogs</Button>
            </div>
        </div>
    )
}
