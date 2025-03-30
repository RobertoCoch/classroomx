import Navbar from "./components/Navbar";
import Clases from "./components/Clases";
import Tareas from "./components/Tareas";
import { NavLink } from "react-router";
import backreturn from './images/backreturn.png'
import profile from './images/profile.png'
import { useState } from "react";

function User(){
    const [activarComponente, setActivarComponente] = useState("componente1");
    return(
        <>
        <section className="flex flex-col bg-[#474646] font-spartan">
            <Navbar></Navbar>
            <div className="w-screen bg-[#474646] pt-5 pb-5 pl-2">
              <NavLink to="../" end>
                <button className="flex flex-row items-center">
                  <img className="w-10 h-10" src={backreturn} alt="" />
                  <h2 className="ml-3 text-white text-2xl">Regresar</h2>
                </button>
              </NavLink> 
            </div>

            <section className="w-screen bg-[#474646] flex flex-col items-center">
              <img className="w-50 h-50 mb-7" src={profile} alt="" />
              <h2 className="text-white text-4xl font-extrabold">Roberto Contreras</h2>
              <p className="text-white mb-5">@roberto_contreras</p>
              <button className="bg-[#EDEDED] w-40 h-12 rounded-xl"><p className="">Editar perfil</p></button>
            </section>

            <div className="w-screen flex flex-row bg-[#474646] pt-15 pb-5 justify-center ">
              <button onClick={() => setActivarComponente("componente1")} className="border-b-[#474646] focus:border-b-white border-b-4 mr-5">
                <p className="text-white font-medium text-2xl">Clases</p>
              </button>
              <button onClick={() => setActivarComponente("componente2")} className="border-b-[#474646] focus:border-b-white border-b-4 mr-5">
                <p className="text-white font-medium text-2xl">Tareas</p>
              </button>
              <button className="border-b-[#474646] focus:border-b-white border-b-4 mr-5">
                <p className="text-white font-medium text-2xl">Calificaciones</p>
              </button>
            </div>

            <section>
              <div className="componente1">
                {activarComponente === "componente1" && (<Clases></Clases> )}
              </div>
              
              <div className="componente2">
                {activarComponente === "componente2" && (<Tareas></Tareas>)}
              </div>
            </section>
          </section>
        </>
    )
}

export default User;