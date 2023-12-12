import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './contexts/UserContext'
function Protected({children}) {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const [currentUser] = user;
    console.log(currentUser)
    if(window.sessionStorage.getItem("token") === currentUser.accessToken)
        return children
    navigate('/')
}
export default Protected