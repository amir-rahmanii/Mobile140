import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    className: 'text-right font-Dana',
  });
};


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
      </div>
    </>
  )
}

export default App
