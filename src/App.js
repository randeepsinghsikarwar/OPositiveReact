// import './App.css';
import {Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <div>
        <img src='asdad' alt=''/>
      </div>

      <div className = "navBar">
          <ul>
            <li className = "login">
            <Link to = '/Login'>Login</Link>
            </li>
            <li className = "signup">
            <Link to = '/Signup'>Signup</Link>
            </li>
            <li className = "guest">
            <Link to = '/Chatting'>Enter as a guest</Link>
            </li>

          </ul>
      </div>
    </div>
  );
}

export default App;
