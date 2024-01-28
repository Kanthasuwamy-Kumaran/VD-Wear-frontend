import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Body from './components/Body'
import Register from './components/Register'
import Login from './components/Login'
import { Route,Routes} from 'react-router-dom';
import Navbarhome from './components/Navbar'
import Avatardemo from './components/Avatardemo';

function App() {
  return (
    <>
    <Navbarhome/>
    
    <Routes>
      <Route exact path="/" Component={Body}/>
      <Route exact path='/register' Component={Register}/>
      <Route exact path='/login' Component={Login}/> 
      <Route exact path='/avatardemo' Component={Avatardemo}/>
    </Routes>

    </>
  );
}

export default App;
