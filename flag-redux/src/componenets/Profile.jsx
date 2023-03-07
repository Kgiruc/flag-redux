import { useSelector } from "react-redux"

function Profile() {

    const user = useSelector((state) => state.user.value);

    return (
        <div className="text-4xl flex justify-center items-center h-[100vh]">
            <ul>
                <li>UserName:{user.name}</li>
                <li>Email:{user.email}</li>
                <li>Age:{user.age}</li>
            </ul>
        </div>
    )
}

export default Profile