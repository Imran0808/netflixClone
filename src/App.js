import "./App.css";
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
     
    <Route path="/"element={<Home/>}/>
    
   
   
    </Routes>
   <Footer/>
    </Router>
  );
}

export default App;
