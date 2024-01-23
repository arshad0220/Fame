import { Route, Routes } from 'react-router';
import './App.css';
import NavigationBar from './pages/NavigationBar';
import Likes from './pages/Likes';
import Followers from './pages/Followers';
import Blogs from './pages/Blogs';
import Supports from './pages/Supports';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClerkProvider } from '@clerk/clerk-react';
import LoginIn from './Auth/Login';
import Logout from './Auth/Logout';

function App() {
const publishableKey="pk_test_c3RlcmxpbmctYWRkZXItODQuY2xlcmsuYWNjb3VudHMuZGV2JA";

  return (
    <div className="App">
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Likes />}/>
      <Route path="/followers" element={<Followers/>}/>
      <Route path="/blogs"  element={<Blogs />}/>
      <Route path="/supports"  element={<Supports />}/>
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
