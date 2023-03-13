import { Link } from "react-router-dom"

function Header() {
  

    return (
        <div className="text-2xl flex flex-col justify-center items-center m-5 bg-red-200">
            <h1>Header</h1>
            <div className="flex gap-12 ">
                <Link  to="/" href="">HOME</Link>
                <Link  to="/posts" href="">Posts</Link>
            </div>
        </div>
    )
}

export default Header