import React,{useContext} from 'react'
import UserInfoContext from '../context/UserInfoContext'

export default function Comment() {
  const user=useContext(UserInfoContext);
  return (
    <div>
      <p>Logged in as... {user.isAdmin?'Admin':'Guest User'}</p>
    </div>
  )
}
