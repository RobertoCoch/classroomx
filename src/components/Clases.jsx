import { useState } from "react";

function Clase ({materia, estado, fecha}){
    return (
        <>
            <div className="flex flex-row justify-around w-full pt-5 pb-5 pl-2 pr-2 ">
                <div>
                    <div>
                        <p>{materia}</p>
                    </div>
                    <div className="flex flex-row">
                            <p>{estado}</p>
                            <button className="bg-[#EDEDED] rounded-lg text-black ml-2 w-23"><p>Abandonar</p></button>
                    </div>
                </div>
                <div>
                        <p>{fecha}</p>
                </div>
            </div>
        </>
    )
}

export default function Clases (){
    const [mostrar, setMostrar] = useState(true);
    let mats = [
        {
            materia: "Herramientas de Desarrollo",
            estado: "Activa ✓",
            fecha: "Creada el 27/01/2025"
        },
        {
            materia: "Desarrollo de Aplicaciones",
            estado: "Activa ✓",
            fecha: "Creada el 29/01/2025"
        },
        {
            materia: "Interconectividad de Redes",
            estado: "Activa ✓",
            fecha: "Creada el 01/02/2025"
        },
        {
            materia: "Analisis y Modeladoh",
            estado: "Terminada ✗",
            fecha: "Creada el 25/08/2024"
        },
    ];
    return (
        <>
           <section className="w-screen bg-[#474646] text-white font-spartan flex flex-col items-center">
                <div className="w-7/8">
                    <p className="ml-1">Clases Inscritas</p>
                </div>
                <div className="flex flex-col w-7/8 bg-[#585757] pt-5 pb-5">
                    {mats.map(function (mat) {
                        return(
                            <Clase key={mat.id} materia={mat.materia} estado={mat.estado} fecha={mat.fecha}></Clase>
                        )
                    })}
                </div>
           </section>
        </>
    )
}