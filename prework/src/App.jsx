import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import { supabase } from './client'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'

function App() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    // READ all creators from table
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('Creators')
        .select()
        .order('created_at', { ascending: false })


      // set state of creators
      setCreators(data);
    }
    fetchCreators(); 
  }, [])


  // Sets up routes
  let element = useRoutes([
    {
      path: "/view/:id",
      element:<ViewCreator data={creators}/>
    },
    {
      path:"/edit/:id",
      element: <EditCreator data={creators} />
    },
    {
      path:"/create",
      element: <AddCreator />
    },
    {
      path:"/",
      element: <ShowCreators  data={creators}/>
    }
  ]);

  return ( 

    <div className="App">
      <div className="header">
        <h1>CREATORVERSE</h1>
        <Link to="/"><button className="headerBtn"> SHOW CREATORS  </button></Link>
        <Link to="/create"><button className="headerBtn"> ADD A CREATOR </button></Link>
      </div>
        {element}
    </div>
  )
}

export default App