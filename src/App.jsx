import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import Navbar from './components/Navbar'
import { BookCheck, ChartBar, Bell } from 'lucide-react'

// Uso de JEST, herramientas de accebilidad

function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
          console.log(json);
          setUsers(json);
      });
  }, []);
  

  return (
    <>
      <div className='flex flex-col w-screen h-screen bg-[#474646] font-spartan'>
        <Navbar></Navbar>
       

        <section className='w-screen h-20 p-5 bg-white flex flex-col justify-center'>
          <p className='pl-5  md:text-xl'>Herramientas de Diseño</p>
          <p className='pl-5  md:text-xl'>Ing. Daniel Perez Flores</p>
        </section>

      

        <section className='mt-10 flex flex-col w-full h-auto items-center justify-center bg-[#474646] md:flex-row md:gap-15 md:h-full md:p-10'>
          {/*TAREAS*/}
          <div className='bg-[#EDEDED] w-8/10 h-40 flex flex-row rounded-md mb-10 md:h-5/10'>
            <div className='bg-[#CBCBCB] w-1/10 h-full rounded-l-md'></div>
            <div className='bg-[#EDEDED] w-9/10 h-full flex flex-col rounded-r-md'>
              <div className='bg-[#2B2B2B] w-full h-2/10 rounded-tr-md flex items-center p-3'>
                <BookCheck className='w-5 h-5 text-white'/>
                <p className='text-white pl-2 md:text-xl'>Tareas Pendientes</p>
              </div>
              <div className='flex flex-col justify-center w-full h-8/10 pl-2'>
                <p className='md:text-xl'>Actividad 1 - Unidad 3</p>
                <p className='md:text-xl'>Actividad 2 - Unidad 3</p>
                <p className='md:text-xl'>Actividad 3 - Unidad 3</p>
              </div>
            </div>
          </div>
          {/*CALIFICACIONES*/}
          <div className='bg-[#EDEDED] w-8/10 h-40 flex flex-row rounded-md mb-10 md:h-5/10'>
            <div className='bg-[#CBCBCB] w-1/10 h-full rounded-l-md'></div>
            <div className='bg-[#EDEDED] w-9/10 h-full flex flex-col rounded-r-md'>
              <div className='bg-[#2B2B2B] w-full h-2/10 rounded-tr-md flex items-center p-3'>
                 <ChartBar className='w-5 h-5 text-white' />
                <p className='text-white pl-2  md:text-xl'>Calificaciones</p>
              </div>
              <div className='flex flex-col justify-center w-full h-8/10 pl-2'>
                <p className='md:text-xl'>U1: 10</p>
                <p className='md:text-xl'>U2: 9</p>
                <p className='md:text-xl'>U2: 9.5</p>
              </div>
            </div>
          </div>
          {/*AVISOS*/}
          <div className='bg-[#EDEDED] w-8/10 h-40 flex flex-row rounded-md mb-10 md:h-5/10'>
            <div className='bg-[#CBCBCB] w-1/10 h-full rounded-l-md'></div>
            <div className='bg-[#EDEDED] w-9/10 h-full flex flex-col rounded-r-md'>
              <div className='bg-[#2B2B2B] w-full h-2/10 rounded-tr-md flex items-center p-3'>
                <Bell className='w-5 h-5 text-white'/>  
                <p className='text-white pl-2  md:text-xl'>Avisos</p>
              </div>
              <div className='flex flex-col justify-center w-full h-8/10 pl-2'>
                <p className='md:text-xl'>Fecha de Examen: Proximo Viernes 28 de marzo</p>
              </div>
            </div>
          </div>
        </section>

        <section className=' w-screen h-30  bg-[#2B2B2B] flex justify-center items-center'>
          <p className='text-white'>© 2025 Classroom X. All rights deserved</p>
        </section>

      </div>

    </>
  )
}

export default App
