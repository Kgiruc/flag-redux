import './index.css';
import { Routes, Route } from "react-router-dom";
import Menu from "./componenets/Menu";
import Results from './componenets/Results';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/res" element={<Results />} />
        </Routes>
    )
}

export default App
