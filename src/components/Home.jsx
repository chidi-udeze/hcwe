import effectbg from '../assets/img/effect.svg';
import Button from './Button';
import data from '../data/landing.json';
export default function Home(props) {
    return (
        <section className="h-screen w-screen bg-primary-light relative z-0 pt-20 px-20 items-center  flex">
            <img className='absolute -z-1 pointer-events-none right-0 top-0' src={effectbg} alt="effect" />
            <div className='w-1/2 flex flex-col gap-3 text-dark  z-0'>
                <h3 className='font-black'>{data.title}</h3>
                <p className=''>{data.paragraph}</p>
                <div className='flex gap-4 '><Button type='outline'>Sign up</Button><Button>Book an Appointment</Button></div>
            </div>
        </section>
    )
}
