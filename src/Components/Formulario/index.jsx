
const Formulario = () => {
    const tipoDatosCotizacion = ['Ciudad','Selecciona tu Hotel', 'Selecciona tipo de habitacion', 'Fecha de entrada', 'Fecha de salida', 'Ingresa la cantidad de adultos', 'Ingresa la cantidad de niños'];
    return(
 
    <div className=" m-auto flex flex-col justify-center items-center border border-purple-800 border-2 rounded-2xl px-4 mb-12">
        <p className="text-purple-800 flex font-bold text-sm justify-center mt-4">REALIZA TU COTIZACION RAPIDAMENTE</p>
  
             <form>
           
             <ul className="py-4 space-y-8 ">
             {tipoDatosCotizacion?.map((dato) => (
                 <li className="border border-purple-800 border-2 flex justify-center">
                     <select className="w-full p-1">
                     <option className="w-full">{dato}</option>
                    
                     </select>
                    
                 </li>
                 ))}
                 
                  <button className="w-full flex justify-center items-center p-2 bg-purple-800 mb-4 text-white font-bold">COTIZAR</button>
                </ul> 
            </form>
          

      
    </div>
    )
}

export { Formulario }