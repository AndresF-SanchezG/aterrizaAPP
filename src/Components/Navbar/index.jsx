import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    
    return (
        <nav className="absolute flex justify-between items-center z-10 w-full py-5 px-6 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg text-red-500">
                    <NavLink to='/'>
                        Aterriza.co
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li >
                    <NavLink  to='/quienes-somos' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                        Quienes Somos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blogs' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                        BlogsPost
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export { Navbar }