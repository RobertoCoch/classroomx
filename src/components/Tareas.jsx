import { useState } from "react";

function Tarea ({materia, tarea, estado, accion, fecha, hora}){
    return (
        <>
            <div className="flex flex-row justify-around w-full pt-5 pb-5 pl-2 pr-2 ">
                <div>
                    <div>
                        <p>{materia}</p>
                        <p>{tarea}</p>
                    </div>
                    <div className="flex flex-row">
                            <p>{estado}</p>
                            <button className="bg-[#EDEDED] rounded-lg text-black ml-2 w-23"><p>{accion}</p></button>
                    </div>
                </div>
                <div>
                        <p>{fecha}</p>
                        <p>{hora}</p>
                </div>
            </div>
        </>
    )
}

export default function Tareas (){
    const [mostrar, setMostrar] = useState(true);
    let tasks = [
        {
            materia: "Herramientas de Desarrollo",
            tarea: "Actividad 1 - Unidad 3",
            estado: "Pendiente",
            accion: "Subir",
            fecha: "Limite el 27/01/2025",
            hora: "a las 23:59 pm"
        },
        {
            materia: "Herramientas de Desarrollo",
            tarea: "Actividad 2 - Unidad 2",
            estado: "Terminada ✓",
            accion: "Revisar",
            fecha: "Enviada el 15/02/2025",
            hora: "a las 20:00 pm"
        },
        {
            materia: "Herramientas de Desarrollo",
            tarea: "Actividad 2 - Unidad 2",
            estado: "Terminada ✓",
            accion: "Revisar",
            fecha: "Enviada el 16/02/2025",
            hora: "a las 19:30 pm"
        },
    ];
    return (
        <>
           <section className="w-screen bg-[#474646] text-white font-spartan flex flex-col items-center">
                <div className="w-7/8">
                    <p className="ml-1">Tareas Enviadas</p>
                </div>
                <div className="flex flex-col w-7/8 bg-[#585757] pt-5 pb-5">
                    {tasks.map(function (task) {
                        return(
                            <Tarea key={task.id} materia={task.materia} tarea={task.tarea} estado={task.estado} accion={task.accion} fecha={task.fecha} hora={task.hora}></Tarea>
                        )
                    })}
                </div>
           </section>
        </>
    )
}