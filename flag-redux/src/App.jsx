import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Routes, Route } from "react-router-dom";
import Login from "./componenets/Login";
import Profile from './componenets/Profile';
import { Provider } from 'react-redux';
import userSlice from "./features/User"

const store = configureStore({
    reducer: {
      user: userSlice
    }
  })

function App() {
    return (<Provider store={store}>
        <Routes>
            
            <Route path="/" element={<Login />} />
            <Route path="/res" element={<Profile />} />
            
        </Routes></Provider>
    )
}

export default App
