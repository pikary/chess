import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Game from './pages/Game'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/game' element={<Game></Game>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
