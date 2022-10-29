import './App.css';
import SignupPage from "./Pages/SignupPage"
import Mainpage from "./Pages/Mainpage"
import LoginPage from "./Pages/LoginPage"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
