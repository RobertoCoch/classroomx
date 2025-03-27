import { useState } from "react";

export default function Sidebar (){
     const [mostrar, setMostrar] = useState(false);
    return (
        <>
          { mostrar || <aside className=' flex flex-col w-3/4 h-screen fixed top-0 left-0 group bg-[#474646] font-spartan'>
            <div>
                <div className="flex flex-row items-center h-20">
                    <p className="text-3xl ml-3 text-white">Classroom X</p>
                    <button onClick={() => setMostrar(!mostrar)} >
                        <img className="ml-10 w-10 h-10" src="/src/images/backreturn.png" alt="" />
                    </button>
                </div>
                
                <hr className="text-white w-70 ml-3"></hr>
            </div>
            <div >
                <button className="h-15 bg-[#585757] flex flex-row items-center w-5/6 mt-5 mb-5 rounded-r-lg">
                    <img className="ml-3 w-10 h-10" src="/src/images/home.png" alt="" />
                    <p className="ml-3 text-white">Menu</p>
                </button >
                <button className="h-15 bg-[#585757] flex flex-row items-center w-5/6 mb-5 rounded-r-lg">
                    <img className="ml-3 w-10 h-10" src="/src/images/book.png" alt="" />
                    <p className="ml-3 text-white">Clases</p>
                </button>
                <button className="h-15 bg-[#585757] flex flex-row items-center w-5/6 mb-5  rounded-r-lg">
                    <img  className="ml-3 w-10 h-10" src="/src/images/settings.png" alt="" />
                    <p className="ml-3 text-white">Configuracion</p>
                </button>
            </div>
            <div className="mt-110">
                <button className="flex flex-row justify-center items-center">
                    <img className="ml-3 w-10 h-10" src="/src/images/help.png" alt="" />
                    <p className="ml-3 text-white">Ayuda</p>
                </button>
            </div>
          </aside>}
        </>
    )
}