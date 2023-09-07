import { NavLink } from "react-router-dom";

const Footer = () => {
    
    
    return (
        <footer className="bottom-0 flex justify-center items-center z-10 w-full py-5 px-6 text-sm font-light">
            <ul className="w-full flex flex-col items-center gap-3 ">
                <li >
                    <NavLink  to='/quienes-somos' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                        Instagram
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blogs' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                        Facebook
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blogs' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                        Registro Turismo
                    </NavLink>
                </li>
            
            </ul>
        </footer>

    )
}

export { Footer }