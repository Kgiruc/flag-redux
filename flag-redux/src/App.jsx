import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Public from "./components/Public"
import Login from "./features/auth/Login"
import RequiredAuth from "./features/auth/RequiredAuth"
import Welcome from "./features/auth/Welcome"

function App() {
  return (
    <Routes>
      <Route path="/" element={Layout}></Route>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route element={<RequiredAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
    </Routes>
  )
}

export default App
