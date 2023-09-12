import { Layout } from "../../Components/Layout"
import { LogoPage } from "../../Components/LogoPage"
import { NavLink } from "react-router-dom";


const QuienesSomos = () => {
    return (
   
        <Layout>
            <LogoPage />
            <div className="flex flex-col justify-center items-center px-10">
            <h2 className="text-blue-700 flex font-bold text-md  justify-center mt-4">QUIENES SOMOS</h2>
            <p className="text-lg text-justify mt-8">Agencia de viajes Aterriza Co SAS legalmente constituida ante la Camara de Comercio De Cali en el año 2021, operamos con destinos desde la ciudad de Cali hacia los principales destinos turisticos como San Andrés, Santa Marta y Cartagena. Ofrecemos los mejores paquetes Tiquete + Hotel mediante bloqueos de sillas y habitaciones que nos permiten ofrecer tarifas accesibles segun las condiciones comerciales establecidas.
            Aterriza.co trata de establecer negociacioes comerciales, rutas logisticas entre ciudades que se beneficientre si para trasladar este beneficio al cliente, es por esto, que en Aterriza.co no encontraras solo un buscador con todas la rutas y destinos solo paquetes estratégicos entre ciudades.
            </p>

            <p className="text-blue-700 flex font-bold text-md mt-8 justify-center items-center w-full">COMO VERIFICAR NUESTRA AUTENTICIDAD</p>

            <p className="text-lg text-justify mt-8">Para verificar nuestra legitimidad te sugerimos los siguientes pasos:</p>

            <p className="text-lg text-justify mt-8">1. Googlea Agencia De Viajes Aterriza.co y verifica nuestros datos oficiales.</p>

            <p className="text-lg text-justify mt-8">2. Googlea o ingresa a la página oficial de confecamaras y consulta nuestro registro nacional de turismo. Puedes dirigirte a la página oficial de confecamaras dando click aqui. 
            <NavLink className="text-red-500" to='https://rnt.confecamaras.co/establecimientos'> CONFECAMRAS</NavLink>     
            </p>

            <p className="text-lg text-justify mt-8 mb-4">3. Googlea o ingresa a la página oficial de la contraloria de la nacion y consulta nuestros antecedentes.Puedes dirigirte a la página oficial de la contraloría dando click aqui. 
            <NavLink className="text-red-500 mb-6 flex" to='https://www.contraloria.gov.co/web/guest/persona-juridica'> CONTRALORIA GENERAL DE LA REPÚBLICA</NavLink>   
         </p>
            </div>
        
            
        </Layout>
    )
  }
  
  export { QuienesSomos }