import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowUp } from "react-icons/fa";
import Scrooler from "/src/Components/Scrooler/Scrooler";


function App() {
  const route = useRoutes(routes)
  return (
    <>
      <div className='box-border'>
        {route}
        {/* toast */}
        <ToastContainer
          theme="colored"
        />
        <Scrooler />
      </div>
    </>
  )
}

export default App
