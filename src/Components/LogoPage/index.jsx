import logoAterrizaReact  from '../../images/WhatsApp Image 2023-09-14 at 3.52.54 PM.jpeg'
import logoAterriza from '../../images/LOGO ATERRIZA.CO.png'

const LogoPage = () => {
    return(
        <div className="bg-white cursor-pointer w-64 h-52 rounded-lg flex justify-center items-center h-auto  ">
            <figure className='relative mb-2 w-64 h-52 flex justify-center items-center'>
                <img className='w-full h-full object-cover rounded-lg w-64 h-52' src={ logoAterriza } alt=''/>
            </figure>
        
        </div>
    )
}

export { LogoPage }