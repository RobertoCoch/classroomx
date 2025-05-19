import React from 'react'

function Clase ({materia, estado, calificacion}){
    
    return (
        <>
            <div className="flex flex-row justify-around w-full pt-5 pb-5 pl-2 pr-2 ">
                <div>
                    <div>
                        <p>{materia}</p>
                    </div>
                    <div className="flex flex-row">
                        <p>{estado}</p>
                    </div>
                </div>
                <div>
                        <p>{calificacion}</p>
                </div>
            </div>
        </>
    )
}

export default function Calificaciones () {
    let calif = [
        {
            materia: "Herramientas de Desarrollo",
            estado: "Activa ✓",
            calificacion: "10"
        },
        {
            materia: "Desarrollo de Aplicaciones",
            estado: "Activa ✓",
            calificacion: "9"
        },
        {
            materia: "Interconectividad de Redes",
            estado: "Activa ✓",
            calificacion: "10"
        },
        {
            materia: "Analisis y Modelado",
            estado: "Activa ✓",
            calificacion: "8"
        },
    ];
  return (
    <>
     <section className="w-screen bg-[#474646] text-white font-spartan flex flex-col items-center">
                <div className="w-7/8">
                    <p className="ml-1">Calificaciones</p>
                </div>
                <div className="flex flex-col w-7/8 bg-[#585757] pt-5 pb-5">
                    {calif.map(function (calif) {
                        return(
                            <Clase key={calif.id} materia={calif.materia} estado={calif.estado} calificacion={calif.calificacion}></Clase>
                        )
                    })}
                </div>
    </section>
    </>
  )
}
