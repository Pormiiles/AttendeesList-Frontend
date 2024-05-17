import codeImg from '../assets/images/icons8-código-32.png'
import { NavLink } from './nav-link'

export function Header() {
    return (
        <div className='flex items-center gap-5 py-2'>
            <img src={codeImg}/>

            <nav className='flex items-center gap-5'>
                <NavLink changeFontColor={true} href="/events">Eventos</NavLink>
                <NavLink href="/attendees">Participantes</NavLink>
            </nav>
        </div>
    )
}