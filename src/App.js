
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cse from "./pages/courses/Cse/Cse";
import Bba from "./pages/courses/Bba/Bba";
import Hsc from "./pages/courses/Hsc/Hsc";
import Footer from "./components/shareComponents/Footer/Footer";





function App() {
  return (
    <div >
       <BrowserRouter>
   
        <Routes>
         <Route path='/' element={<Home/>} />
          <Route  path='/home' element={<Home/>} />
          <Route  path='/cse' element={<Cse/>} />
          <Route  path='/bba' element={<Bba/>} />
          <Route  path='/hsc' element={<Hsc/>} />
          
          
          
         
         </Routes>
         <Footer />
      </BrowserRouter>
     
     
     
     
    </div>
  );
}

export default App;
