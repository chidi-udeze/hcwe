import React from 'react'
import { BlogCard } from './BlogCard'
import data from '../data/insights.json';

export function Insights(props) {
    

    return (
        <section className=" w-screen bg-light relative z-0 py-20 px-20 flex flex-col gap-8">
                <h3 className='font-black text-dark text-2xl'>{data.title}</h3>
                <p>{data.subtitle}</p>
                <div className='grid grid-flow-col gap-8 overflow-x-scroll max-w-screen'>
                    {data.blogs.map((blog,index)=>{
                        return (<BlogCard key={index} className="w-[500px]" title={blog.title} type={index%2===0?'bg-dark':'bg-light'} description={blog.description} />)
                    })}

                </div>
        </section>
    )
}
