import React from 'react'
import{BrowserRouter,Route, Routes,} from 'react-router-dom'
import Enquiry from './Pages/Enquiry'
import Experience from './Pages/Experience'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Signin from './Pages/SignIn'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element= {<Home/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/enquiry' element={<Enquiry/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App