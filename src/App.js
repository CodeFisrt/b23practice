
import './App.css';
 
import Customer from './components/Customer'
import Variable from './components/Variable';
import StateDeclartion from './components/StateDeclartion';
import Event from './components/Event';
import StateWithObject from './components/StateWithObject';
import StateWithArray from './components/StateWithArray';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import DynamicClass from './components/DynamicClass';
import Photos from './sampleApp/Photos';
import User from './sampleApp/User';
import Product from './sampleApp/Product';
import Patient from './sampleApp/Patient';
function App() {
  return (
    <div className=""> 
      <BrowserRouter> 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link class="nav-link active" to="/varibale">varibale</Link> 
              </li>
              <li className="nav-item">
              <Link class="nav-link active" to="/event">event</Link> 
              </li>
              <li className="nav-item">
              <Link class="nav-link active" to="/state-declaration">State</Link> 
              </li> 
              <li className="nav-item">
              <Link class="nav-link active" to="/Dynamic-class">Dynamic-class</Link> 
              </li> 
              <li className="nav-item">
              <Link class="nav-link active" to="/photos">Photos</Link> 
              </li> 
              <li className="nav-item">
              <Link class="nav-link active" to="/user">user</Link> 
              </li> 
              <li className="nav-item">
              <Link class="nav-link active" to="/Product">Product</Link> 
              </li> 
              <li className="nav-item">
              <Link class="nav-link active" to="/Patient">Patient</Link> 
              </li> 
            </ul>
          </div>
        </nav>
        <Routes>
          {/* Default Route */}
          <Route path='/' element={<StateWithArray></StateWithArray>}></Route> 
          <Route path="/varibale" element={<Variable></Variable>}></Route>
          <Route path="/event" element={<Event></Event>}></Route>
          <Route path="/photos" element={<Photos></Photos>}></Route>
          <Route path="/Dynamic-class" element={<DynamicClass></DynamicClass>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/Product" element={<Product></Product>}></Route>
          <Route path="/Patient" element={<Patient></Patient>}></Route>
          <Route path="/state-declaration" element={<StateDeclartion></StateDeclartion>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
