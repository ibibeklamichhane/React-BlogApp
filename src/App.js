import  SignupForm from './components/Signup'
import LoginForm  from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/Error';
import Blogs from './components/Blogs';
import ScrollToTop from "react-scroll-to-top";

import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';



function App() {
  return (
    <div className="App">
         <Router>
           <Navbar />
     
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/blogs" element={<Blogs/>} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginForm/>}/>
              <Route path="/signin" element={<SignupForm/>}/>

              <Route path="*" element={<NoMatch/>} />

            </Routes>
    </Router>


    <ScrollToTop smooth color="#ff0000" />
    </div>
  );
}

export default App;
