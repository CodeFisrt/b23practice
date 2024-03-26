
import './App.css';
import User from './components/User';
import Customer from './components/Customer'
import Variable from './components/Variable';
import StateDeclartion from './components/StateDeclartion';
import Event from './components/Event';
import StateWithObject from './components/StateWithObject';

function App() {
  return (
    <div className="App">
      <h1>Welcome B-23</h1>
      <table style={{width:'100%'}}>
        <tr>
          <td>
            <StateWithObject></StateWithObject>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
