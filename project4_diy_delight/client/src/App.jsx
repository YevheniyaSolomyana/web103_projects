import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewMice from './pages/ViewMice'
import EditMouse from './pages/EditMouse'
import CreateMouse from './pages/CreateMouse'
import MouseDetails from './pages/MouseDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateMouse title='logiCustom | Customize' />
    },
    {
      path:'/viewmice',
      element: <ViewMice title='logiCustom | Custom Mice' />
    },
    {
      path: '/viewmice/:id',
      element: <MouseDetails title='logiCustom | View' />
    },
    {
      path: '/edit/:id',
      element: <EditMouse title='logiCustom | Edit' />
    }
  ])

  return (
    <div className='app'>

      <Navigation />

      { element }

    </div>
  )
}

export default App