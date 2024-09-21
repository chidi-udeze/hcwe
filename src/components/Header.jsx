import logo from '../assets/img/logo.png';

export default function Header({ menuItems, activeSection }) {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header z-10 fixed w-screen bg-primary py-4 px-6 text-light flex items-center justify-between">
      <img src={logo} alt="logo" className='logo h-[40px]' />
      <nav className='gap-2 flex'>
        {menuItems.map((item, idx) => (
          <span
            className={`cursor-pointer px-2 py-1 rounded-2xl transition-all ease-in-out duration-300 ${
              activeSection === item.label
                ? 'bg-light text-dark'
                : 'hover:bg-light hover:text-dark'
            }`}
            key={idx}
            onClick={() => scrollToRef(item.ref)}
          >
            {item.label}
          </span>
        ))}
      </nav>
    </div>
  )
}