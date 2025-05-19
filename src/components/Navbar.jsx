import Sidebar from "./Sidebar"
import { useState } from "react";
import { NavLink } from "react-router";
import profile from '../images/profile.png'
import logoSidebar from '../images/sidebar.png';
import { PanelRight } from 'lucide-react';

export default function Navbar (){
    const [mostrar, setMostrar] = useState(true);
    return (
        <>
            <nav className='w-screen h-20 bg-[#5AB69D] flex flex-row justify-between p-4'>
                        <button onClick={() => setMostrar(!mostrar)}  className='cursor-pointer pl-5'><PanelRight className="w-13 h-13"/></button>
                        <div className='flex flex-row items-center pr-5'>
                          <p className='font-spartan pr-5 text-white'>Roberto Contreras</p>
                          <NavLink to="/user" end>
                          <button className="cursor-pointer"><img className='w-10 h-10' src={profile} alt="" /></button>
                          </NavLink>
                         
                        </div>
            </nav>
            {mostrar || <Sidebar></Sidebar>}
        </>
    )
}