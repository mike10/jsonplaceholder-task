import './Users.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from "../../redux/usersSlice"
import User from '../User/User';
import Loader from '../Loader/Loader'

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.data)
    const status = useSelector(state => state.users.status)
    const [openLoader, setOpenLoader] = useState(false)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    useEffect(() => {
        setOpenLoader(status)
    }, [status])
   
    return (
        <div className="users flex-container">
                
            {users.map(item => {
                return <User {...item} key={item.id}/>  
            })}
                
            <Loader status={openLoader} />
            
        </div>
    );
}

export default Users
