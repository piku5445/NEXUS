import Footer from "./components/Footer";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Videos from "./components/Videos";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/Signup";
import {  BrowserRouter as Router,Route, Routes} from "react-router-dom";
function App() {

  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/upload" element={<Upload />} />
     
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
  </Router>
  )
}

export default App
