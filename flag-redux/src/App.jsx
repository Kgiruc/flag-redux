import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from './componenets/Home';
import Posts from './componenets/Posts';


function App() {
    return (
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            
        </Routes>
    )
}

export default App
