import React from 'react';
import Home from './Components/Home';
// import About from './Components/About';
import Contact from './Components/Contact';
import {Routes , Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Success from './Components/Success';
import NotFound from './Components/NotFound';
import Projects from './Components/Projects';
import Manifesto from './Components/Manifesto';
import PoliticalAffairs from './Components/PoliticalAffairs';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
 import Login from './Components/Login';
import {AuthProvider} from "./Components/auth";
import Logout from './Components/Logout';
// import SignUp from './Components/SignUp';
import PrivateRoute from './Components/PrivateRoute';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LazyAbout = React.lazy(() => import("./Components/About"))

const App = () => {
   return(
      
      <AuthProvider className='App'>
           <Navbar />
           <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{fontSize:"13.7px"}}

      />
           <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={
            <React.Suspense fallback="Loading...">
               <LazyAbout />
            </React.Suspense>} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/success" element={<Success />} />
            <Route path="/projects" element={<Projects />}>
                {/* <Route index element={<NewProjects />} /> */}
                <Route path="manifesto" element={<Manifesto />} />
                 <Route path="political" element={<PoliticalAffairs />} />
            </Route>
            <Route path="/users" element={
            <PrivateRoute>
               <Users />
            </PrivateRoute>} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="*" element={<NotFound />} />
            </Routes>
      </AuthProvider> 
   )
}

export default App;


