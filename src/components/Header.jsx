import logo from '../assets/img/logo.png';

export default function Header({items=[{label:'Home'},{label:'About'},{label:'Insights'},{label:'Events'}]}) {
    return (
        <div className="header z-10 fixed w-screen bg-primary py-4 px-6 text-light flex items-center justify-between">
            <img src={logo} alt="logo" className='logo h-[40px]' />
            <nav className='gap-2 flex'>
                {
                    items.map((item,idx)=>(
                        <span className='hover:bg-light hover:text-dark cursor-pointer px-2 py-1 rounded-2xl transition-all ease-in-out duration-300' key={idx}>{item.label}</span>
                    ))
                }
            </nav>
        </div>
    )
}
