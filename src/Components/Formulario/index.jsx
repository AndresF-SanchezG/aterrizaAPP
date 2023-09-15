
const Formulario = () => {
    const tipoDatosCotizacion = ['Selecciona tu Hotel', 'Selecciona tipo de habitacion', 'Fecha de entrada', 'Fecha de salida', 'Ingresa la cantidad de adultos', 'Ingresa la cantidad de niños'];
    return(
 
    <div className=" m-autoflex justify-center items-center border border-purple-800 border-2 rounded-2xl px-4 mb-12">
        <p className="text-purple-800 flex font-bold text-sm justify-center mt-4">REALIZA TU COTIZACION RAPIDAMENTE</p>
        {tipoDatosCotizacion?.map((dato) => (
             <form>
             <ul className="py-4 space-y-8 ">
               
                 <li className="border border-purple-800 border-2 flex justify-center">
                     <select className="w-full">
                     <option className="w-full">{dato}</option>
                     </select>
                 </li>
                </ul>
            </form>

        ))}
    </div>
    )
}

export { Formulario }