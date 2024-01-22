import { Route, Routes } from 'react-router';
import './App.css';
import NavigationBar from './pages/NavigationBar';
import Likes from './pages/Likes';
import Followers from './pages/Followers';
import Blogs from './pages/Blogs';
import Supports from './pages/Supports';

function App() {
  return (
    <div className="App">
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Likes />}/>
      <Route path="/followers" element={<Followers/>}/>
      <Route path="/blogs"  element={<Blogs />}/>
      <Route path="/supports"  element={<Supports />}/>
    </Routes>
    </div>
  );
}

export default App;
