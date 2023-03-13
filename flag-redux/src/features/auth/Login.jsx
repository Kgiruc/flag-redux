import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "./AuthApiSlice"
import { setCredentials } from "./AuthSlice"

function Login() {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDeafult()

        try {
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPwd('')
            navigate('/welcome')
        } catch (err) {
            if (!err.orginalStatuse) {
                setErrMsg('No server response');
            } else if (err.orginalStatus === 400) {
                setErrMsg('missing username or password')
            } else if (err.orginalStatus === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login failed')
            }
            errRef.current.focus();

        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section>
            <p ref={errRef} ></p>

            <h1>Employee Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={pwd}
                    onChange={handlePwdInput}
                    required
                />
                <button>Sign In</button>
            </form>
        </section>
    )
    return content
}

export default Login