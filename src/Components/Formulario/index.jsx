
const Formulario = () => {
    return(
      <div className="mt-4 m-autoflex justify-center items-center border border-blue-700 rounded-2xl px-4 mb-2">
        <p className="text-blue-700 flex font-bold text-sm justify-center mt-4">REALIZA TU COTIZACION RAPIDAMENTE</p>
        <form>
            <ul className="py-4 space-y-8 ">
              
                <li className="border border-blue-700 flex justify-center">
                    <select />
                    <option>Selecciona tu Hotel</option>
                </li>
                <li className="border border-blue-700 flex justify-center">
                    <select />
                    <option>Selecciona tipo de habitacion</option>
                </li>
                <li className="border border-blue-700 flex justify-center">
                    <select />
                    <option>Selecciona tipo de habitación</option>
                </li>
                <li className="border border-blue-700 flex justify-center">
                    <select />
                    <option>Ingresa la cantidad de adultos</option>
                </li>
                <li className="border border-blue-700 flex justify-center">
                    <select />
                    <option>Ingresa la cantidad de niños</option>
                </li>
            </ul>

        </form>

      </div>
    )
}

export { Formulario }