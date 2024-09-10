import React from 'react'
import logo from '../assets/img/logo.png';
import insta from '../assets/img/Instagram.png';
import youtube from '../assets/img/Youtube.png';

export function Footer(props) {
    

    return (
        <section className='grid grid-cols-3 gap-4 bg-primary text-light p-4'>
            <img src={logo} alt="logo" className='logo w-fit' />
            <p className='text-xs text-justify flex items-center'>Your health is our priority. Let us partner with you on your journey to better health and wellbeing. Visit us today and take the first step towards a healthier future.</p>
            <div className='flex flex-col gap-4 items-end'>
                <a href="arvnd.in">somemail@mail.com</a>
                <span className='flex gap-3'>
                    <img className='object-contain h-[30px]' src={insta} alt="instagram" />
                    <img src={youtube} alt="youtube" className='object-contain h-[30px]' />
                </span>
            </div>
        </section>
    )
}
