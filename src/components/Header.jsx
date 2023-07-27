import logo from './../logo.svg'

export const Header = () => {
    return (
        <header className='w-full border-b border-white/20 text-white fixed bg-black font-bold'>
            <nav className='flex h-[72px] mx-[5.6rem] justify-between'>
                <div className='flex'>
                    <a className='flex items-center' href="">
                        <img className='me-[3.02rem]' src={logo} alt="Shopify Plus Logo" width={127}/>
                    </a>

                    <ul className='flex items-center gap-[2rem]'>
                        <li><a className='hover:underline tracking-tight' href="">Vende</a></li>
                        <li><a className='hover:underline tracking-tight' href="">Gestiona</a></li>
                        <li><a className='hover:underline tracking-tight' href="">Integra</a></li>
                    </ul>
                </div>

                <ul className='flex items-center gap-[2rem]'>
                    <li><a className='hover:underline tracking-tight' href="">Plataforma</a></li>
                    <li><a className='hover:underline tracking-tight' href="">Precios</a></li>
                    <li><a className='hover:underline text-[#d0f224] tracking-tight' href="">Contactar con el equipo de ventas</a></li>
                </ul>
            </nav>
        </header>
    )
}