
import './App.css';
import Navbar from './components/Navbar';
import Thali from './components/Thali';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CheckOut from './components/CheckOut';
function App() {
  return (

    
    <div className="App">
     
<BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/thali" element={ <Thali/>}/>
        <Route path="/checkOut" element={<CheckOut/>} />
      
    </Routes>
  </BrowserRouter>
     
     
    </div>
  );
}

export default App;
