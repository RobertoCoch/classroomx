import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Weather from './Weather'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='w-screen h-screen bg-[#474646] font-spartan'>
        <Navbar></Navbar>
       

        <section className='w-screen h-20 bg-white flex flex-col justify-center'>
          <p className='pl-5'>Herramientas de Diseño</p>
          <p className='pl-5'>Ing. Daniel Perez Flores</p>
        </section>

      

        <section className='flex flex-col w-screen h-auto items-center justify-center bg-[#474646] md:flex-row'>
          {/*TAREAS*/}
          <div className='bg-[#EDEDED] w-70 h-40 flex flex-row rounded-md mt-10 mb-10'>
            <div className='bg-[#CBCBCB] w-5 h-40 rounded-l-md'></div>
            <div className='bg-[#EDEDED] W-65 h-40 flex flex-col rounded-r-md'>
              <div className='bg-[#2B2B2B] w-65 h-7 rounded-tr-md'>
                <p className='text-white pl-2'>Tareas Pendientes</p>
              </div>
              <div className='flex flex-col justify-center w-65 h-33 pl-2'>
                <p>Actividad 1 - Unidad 3</p>
                <p>Actividad 2 - Unidad 3</p>
                <p>Actividad 3 - Unidad 3</p>
              </div>
            </div>
          </div>
          {/*CALIFICACIONES*/}
          <div className='bg-[#EDEDED] w-70 h-40 flex flex-row rounded-md mb-10'>
            <div className='bg-[#CBCBCB] w-5 h-40 rounded-l-md'></div>
            <div className='bg-[#EDEDED] W-65 h-40 flex flex-col rounded-r-md'>
              <div className='bg-[#2B2B2B] w-65 h-7 rounded-tr-md'>
                <p className='text-white pl-2'>Calificaciones</p>
              </div>
              <div className='flex flex-col justify-center w-65 h-33 pl-2'>
                <p>U1: 10</p>
                <p>U2: 9</p>
                <p>U2: 9.5</p>
              </div>
            </div>
          </div>
          {/*AVISOS*/}
          <div className='bg-[#EDEDED] w-70 h-40 flex flex-row rounded-md mb-10'>
            <div className='bg-[#CBCBCB] w-5 h-40 rounded-l-md'></div>
            <div className='bg-[#EDEDED] W-65 h-40 flex flex-col rounded-r-md'>
              <div className='bg-[#2B2B2B] w-65 h-7 rounded-tr-md'>
                <p className='text-white pl-2'>Avisos</p>
              </div>
              <div className='flex flex-col justify-center w-65 h-33 pl-2'>
                <p>Fecha de Examen: Proximo Viernes 28 de marzo</p>
              </div>
            </div>
          </div>
        </section>

        <section className='w-screen h-30  bg-[#2B2B2B] flex justify-center items-center'>
          <p className='text-white'>© 2025 Classroom X. All rights deserved</p>
        </section>

      </div>

    </>
  )
}

export default App
