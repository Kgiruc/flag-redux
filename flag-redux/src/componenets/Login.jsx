import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../features/User"

function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    const dispatch = useDispatch()

    return (
        <div className="text-2xl flex justify-center items-center h-[100vh]">
            <label className="flex flex-col gap-2" >
                imie
                <input
                    className="border-2 border-black"
                    type={"text"}
                    placeholder="imię..."
                    onChange={e => setName(e.target.value)}
                />
                Email
                <input
                    className="border-2 border-black"
                    type={"text"}
                    placeholder="Email..."
                    onChange={e => setEmail(e.target.value)}
                />
                Age
                <input
                    className="border-2 border-black"
                    type={"number"}
                    placeholder="Age..."
                    onChange={e => setAge(e.target.value)}
                />
                <button
                className="border-2 w-10/12"
                onClick={() => {
                  dispatch(login({name:name,email:email,age:age}))  
                }}
                >
                    Login
                </button>
            </label>
        </div>
    )
}

export default Login