import './App.css';
import { BrowserRouter,Routes,Route,Link,NavLink} from 'react-router-dom';
import Navbar from './landingPage/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Doctor from './pages/Doctor';
import Registration from './pages/RegistrationForm';
import SignIn from './pages/SignIn';
import TermAndConditions from './pages/TermAndConditions';
import ForgetPassword from './pages/ForgetPassword';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/doctor' element={<Doctor />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/termsandconditions' element={<TermAndConditions />} />
      <Route path='/forget-password' element={<ForgetPassword/>} />
    </Routes>
      
    </>
  );
}

export default App;
