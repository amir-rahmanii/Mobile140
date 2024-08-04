import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  const route = useRoutes(routes)
  return (
    <>
      <div className='box-border'>
          {route}
      </div>
    </>
  )
}

export default App
