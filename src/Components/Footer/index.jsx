import { NavLink } from "react-router-dom";
import logotipoInstagram from '../../images/logotipo-de-instagram.png'
import logoFacebook from '../../images/facebook.png'
import logoWhatsapp from '../../images/whatsapp.png'


const Footer = () => {
    
    
    return (
        <footer className="flex bottom-0 z-10 w-full py-5 px-6 md:px-60 text-md font-light">
            <ul className="w-full flex flex-col items-center gap-3  justify-around md:flex-row ">
                <li className=" w-40 flex justify-center items-center">
                    <NavLink  to='https://www.instagram.com/aterriza.co/' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                    <span className="flex justify-center items-center gap-2"><img className="w-8 h-8 flex" src={logotipoInstagram}/>Instagram</span>
                       
                    </NavLink>
                </li>
                <li className=" w-40 flex justify-center items-center">
                    <NavLink to='https://www.facebook.com/profile.php?id=100064084713525&locale=es_LA' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                    <span className="flex justify-center items-center gap-2"><img className="w-8 h-8 flex" src={logoFacebook}/>Facebook</span>
                        
                    </NavLink>
                </li>
                <li className=" w-40 flex justify-center items-center">
                    <NavLink to='https://api.whatsapp.com/message/YLPVIZPCJH2JN1?autoload=1&app_absent=0' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                    <span className="flex justify-center items-center gap-2"><img className="w-8 h-8 flex" src={logoWhatsapp}/>Whatsapp</span>
                        
                    </NavLink>
                </li>
            
            </ul>
        </footer>

    )
}

export { Footer }