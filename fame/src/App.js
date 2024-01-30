import { Route, Routes } from 'react-router';
import './App.css';
import NavigationBar from './pages/NavigationBar';
import Likes from './pages/Likes';
import Followers from './pages/Followers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClerkProvider } from '@clerk/clerk-react';
import LoginIn from './Auth/Login';
import Logout from './Auth/Logout';
import "./Assets/styles/styles.css"

function App() {
const publishableKey="pk_test_c3RlcmxpbmctYWRkZXItODQuY2xlcmsuYWNjb3VudHMuZGV2JA";

  return (
    <div className="App">
    <div style={{display:"flex", flexDirection:"column", height:"120px"}}>
      <NavigationBar />
      <div className='card-coupan justify-content-center'>
        <div className='container d-flex align-items-center justify-content-center' style={{alignItems:'center', textAlign:'center'}}>Auto pilote your tik tock</div>
      </div>
    </div>
    <Routes>
      <Route path="/fame-likes" element={<Likes />}/>
      <Route path="/fame-followers" element={<Followers/>}/>
      <Route path="/login"  element={
        <ClerkProvider publishableKey={publishableKey}>
        <LoginIn/>
        </ClerkProvider>
      }/>
      <Route path="/logout"  element={ 
        <ClerkProvider publishableKey={publishableKey}>
          <Logout/>
        </ClerkProvider>}/>
    </Routes>
    </div>
  );
}

export default App;
