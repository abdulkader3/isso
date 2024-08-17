
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LeyaOutOne from './LayOut/LeyaOutOne'


function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route path='/' element={<LeyaOutOne/>}/>
        <Route index element={<Home/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={shanto}/>
     
    </>
  )
}

export default App
