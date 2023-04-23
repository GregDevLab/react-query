import { NavLink } from 'react-router-dom'
import s from './styles.module.css'


const Navbar = () => {

    const activeLink = ({ isActive }) => (`${s.link} ${isActive && s.active}`)

    return (
        <nav className={s.nav}>
            <ul className={s.nav_container}>
                <li>
                    <NavLink to='/' className={activeLink}>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='/heroes' className={activeLink}>Super-heros</NavLink>
                </li>
                <li>
                    <NavLink to='/rq-heroes' className={activeLink}>RQ | Super-heros</NavLink>
                </li>
                <li>
                    <NavLink to='/rq-parallel' className={activeLink}>RQ | Parallel</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar