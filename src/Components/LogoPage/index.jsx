import logoAterrizaReact  from '../../images/logoAterrizaReact.jpg'

const LogoPage = () => {
    return(
        <div className="bg-white cursor-pointer w-30 h-24 rounded-lg flex justify-center items-center mb-5 mt-4 md:mt-8">
            <figure className='relative mb-2 w-full h-full flex justify-center items-center '>
                <img className='w-full h-full object-cover rounded-lg w-36 h-36 ' src={ logoAterrizaReact } alt=''/>
            </figure>
        
        </div>
    )
}

export { LogoPage }