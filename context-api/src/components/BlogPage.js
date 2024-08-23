import React , {useContext}from 'react'
import UserInfoContext from '../context/UserInfoContext';
import Post from './Post';
import Comment from './Comment';

export default function BlogPage() {
  const user=useContext(UserInfoContext);
  return (
    <div>
      <h1> {`${user.userName}'s Blog Page:`} </h1>
      <Post></Post>

      <Comment/>
    </div>
  )
}
