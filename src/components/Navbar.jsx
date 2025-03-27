import Sidebar from "./Sidebar"
import { useState } from "react";
import { NavLink } from "react-router";
export default function Navbar (){
    const [mostrar, setMostrar] = useState(true);
    return (
        <>
            <nav className='w-screen h-20 bg-[#5AB69D] flex flex-row justify-between'>
                        <button onClick={() => setMostrar(!mostrar)}  className='pl-5'><img className='w-13 h-13' src="/src/images/sidebar.png" alt="" /></button>
                        <div className='flex flex-row items-center pr-5'>
                          <p className='font-spartan pr-5 text-white'>Roberto Contreras</p>
                          <NavLink to="/user" end>
                          <button><img className='w-10 h-10' src="/src/images/profile.png" alt="" /></button>
                          </NavLink>
                         
                        </div>
            </nav>
            {mostrar || <Sidebar></Sidebar>}
        </>
    )
}