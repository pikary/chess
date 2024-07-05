import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Game from './pages/Game'
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SIgnUp';
import './styles/main.scss'

function App() {
  return (
      <div className="App">
          <Navbar />
          <BrowserRouter>
              <main>
                  <Routes>
                      <Route path='/home' element={<Home />} />
                      <Route path='/game' element={<Game />} />
                      <Route path='/login' element={<SignIn />} />
                      <Route path='/register' element={<SignUp />} />
                  </Routes>
              </main>
            
          </BrowserRouter>
      </div>
  );
}

export default App;
