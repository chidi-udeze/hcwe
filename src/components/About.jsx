import Button from './Button';
import { Stats } from './Stats';
import aboutbg from '../assets/img/about-bg.png';
import data from '../data/about.json';

export default function About(props) {
    return (
        <section className="h-fit w-screen bg-light relative z-0 py-20 px-20 flex items-center justify-center">
        <div className='w-full max-w-6xl flex flex-col md:flex-row gap-8'>
          <div className='sm:w-2/3 md:w-1/2 flex gap-6'>
            <div className='flex flex-col gap-6 w-fit'>
                {
                    data.stats.map((stat,index)=>{
                        const bg = index%3 === 1 ? 'primary' : index%3 === 2 ? 'ternary' : 'secondary';
                        return (<Stats key={index} title={stat.title} count={stat.count} bg={bg}  showPlus={stat.showPlus}/>)
                    })

                }
            </div>
            <div className='flex-grow rounded-[30px] overflow-hidden'>
              <img src={data.sideImageUrl || aboutbg} alt="aboutbg" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='sm:w-1/3 md:w-1/2 flex flex-col gap-3 text-dark z-0 justify-center'>
            <h3 className='font-black text-2xl'>{data.title}</h3>
            <p className=''>{data.paragraph}</p>
            <div className='flex gap-4'><Button>Book an Appointment</Button></div>
          </div>
        </div>
      </section>
    )
}
