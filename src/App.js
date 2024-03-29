
import './App.css';
import User from './components/User';
import Customer from './components/Customer'
import Variable from './components/Variable';
import StateDeclartion from './components/StateDeclartion';
import Event from './components/Event';
import StateWithObject from './components/StateWithObject';
import StateWithArray from './components/StateWithArray';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import DynamicClass from './components/DynamicClass';
function App() {
  return (
    <div className="App"> 
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
            </ul>
          </div>
        </nav>
        <Routes>
          {/* Default Route */}
          <Route path='/' element={<StateWithArray></StateWithArray>}></Route> 
          <Route path="/varibale" element={<Variable></Variable>}></Route>
          <Route path="/event" element={<Event></Event>}></Route>
          <Route path="/Dynamic-class" element={<DynamicClass></DynamicClass>}></Route>
          <Route path="/state-declaration" element={<StateDeclartion></StateDeclartion>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
