import { useState } from "react";
import home from '../images/home.png'
import book from '../images/book.png'
import settings from '../images/settings.png'
import help from '../images/help.png'
import { ChevronsLeft } from 'lucide-react';


export default function Sidebar (){
     const [mostrar, setMostrar] = useState(false);
    return (
        <>
          { mostrar || <aside className=' flex flex-col w-3/4 h-screen fixed top-0 left-0 group bg-[#474646] font-spartan md:w-2/5'>
            <div className="w-full ">
                <div className="flex flex-row items-center h-20 justify-between">
                    <p className="text-4xl font-bold ml-5 text-white">Classroom X</p>
                    <button onClick={() => setMostrar(!mostrar)}  className="cursor-pointer">
                         <ChevronsLeft className="w-10 h-10 mr-20 text-white"/>
                    </button>
                </div>
                
                <hr className="text-white w-9/10 ml-3"></hr>
            </div>
            <div className="p-5">
                <button className="cursor-pointer h-15 bg-[#585757] flex flex-row items-center w-5/6 mt-5 mb-5 rounded-r-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img className="ml-3 w-10 h-10" src={home} alt="" />
                    <p className="ml-3 text-white">Menu</p>
                </button >
                <button className="cursor-pointer h-15 bg-[#585757] flex flex-row items-center w-5/6 mb-5 rounded-r-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img className="ml-3 w-10 h-10" src={book} alt="" />
                    <p className="ml-3 text-white">Clases</p>
                </button>
                <button className="cursor-pointer h-15 bg-[#585757] flex flex-row items-center w-5/6 mb-5  rounded-r-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img  className="ml-3 w-10 h-10" src={settings} alt="" />
                    <p className="ml-3 text-white">Configuracion</p>
                </button>
            </div>
            <div className="mt-110">
                <button className="flex flex-row justify-center items-center">
                    <img className="ml-3 w-10 h-10" src={help} alt="" />
                    <p className="ml-3 text-white">Ayuda</p>
                </button>
            </div>
          </aside>}
        </>
    )
}