import logoAterrizaReact  from '../../images/WhatsApp Image 2023-09-14 at 3.52.54 PM.jpeg'
import logoAterriza from '../../images/LOGO ATERRIZA.CO.png'

const LogoPage = () => {
    return(
        <div className="bg-white cursor-pointer w-30 h-24 rounded-lg flex justify-center items-center mb-14 mt-10 mt-4">
            <figure className='relative mb-2 w-full h-full flex justify-center items-center '>
                <img className='w-full h-full object-cover rounded-lg w-42 h-44 ' src={ logoAterriza } alt=''/>
            </figure>
        
        </div>
    )
}

export { LogoPage }