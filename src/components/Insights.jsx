import React, {useEffect, useState} from 'react'
import { BlogCard } from './BlogCard'
import data from '../data/insights.json';
import urls from '../data/references.json';
import axios from 'axios';

export function Insights(props) {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${urls['medium-userName']}`)//healthclinicwithesta
        .then(response => {
            console.log('medium',response.data);
            const articles = response?.data?.items?.slice(0, 4)
            .map(post => ({
            title: post.title,
            description: post.description
                .replace(/<[^>]*>/g, '') // Remove HTML tags
                .replace(/\n/g, ' ') // Remove newline characters
                .split(' ')
                .slice(0, 30)
                .join(' ')
                .trim() + '...', // Limit to 30 words
            url: post.link
            })) || [];
    setArticles(articles);
  })
  .catch(error => {
    console.error('Error:', error);
  });
    },[])

    return (
        <section className=" w-screen bg-light relative z-0 py-20 px-20 flex flex-col gap-8">
                <h3 className='font-black text-dark text-2xl'>{data.title}</h3>
                <p>{data.subtitle}</p>
                <div className='grid grid-flow-col gap-8 overflow-x-scroll max-w-screen'>
                    {articles.map((blog,index)=>{
                        return (<BlogCard key={index} url={blog.url} className="w-[500px]" title={blog.title} type={index%2===0?'bg-dark':'bg-light'} description={blog.description} />)
                    })}

                </div>
        </section>
    )
}
