import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import RequireAuth from './Pages/RequireAuth';
import Todo from './Pages/Todo';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home />
        }></Route>
        <Route path="/todo" element={
          <RequireAuth>
            <Todo />
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
