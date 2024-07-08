import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Game from './pages/Game'
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SIgnUp';
import './styles/main.scss'
import { getMeApiCall } from './store/auth/api';

function App() {
    const dispatch = useAppDispatch()
    const { data } = useTypedSelector((state) => state.auth)
    useEffect(()=>{
        const getMe = async()=>{
            await dispatch(getMeApiCall(null))
        }
        getMe()
    },[dispatch])
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
