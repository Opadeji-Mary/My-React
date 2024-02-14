import { Route, Routes } from 'react-router-dom'
import './App.css'
import Price from './components/Price'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Dashboard from './Van/dashboard'
import Income from './Van/income'
import Vanlayout from './Van/Vanlayout'
import Review from './Van/Review'
import Fetch from './components/Fetch'
import Apibackend from './components/Apibackend'
import Signup from './components/Signup'
import Register from './components/Auth/Register'
import Fileupload from './styles/Fileupload'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
     <Route element={<Layout />}>
       <Route path="/navbar" element={<Navbar />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/price" element={<Price />} />
       <Route path="/fetch" element={<Fetch/>} />
       <Route path="/home" element={<Home />} />
       <Route path="/service" element={<Service />} />
       <Route path="/api" element={<Apibackend/>}/>
       <Route path="/signup" element={<Signup />} />
       <Route path="/file" element={<Fileupload/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/van" />

       {/* <Route path="/van" element={<Dashboard/>}/>
       <Route path="/van/income" element={<Income/>}/>
       <Route path="/van/review" element={<Review/>}/> */}


       {/* nested routes */}
       <Route path="/van" element={<Vanlayout/>}>
         <Route path="van/dash" element={<Dashboard/>} />
         <Route path="van/income" element={<Income/>} />
         <Route path="/van/review" element={<Review/>} />
       </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
