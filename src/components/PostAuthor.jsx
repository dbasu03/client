import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/Avatar.jpg'

const PostAuthor = () => {
  return (
    <Link to={'/posts/users/sdfsdf'}>
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By:Unknown</h5>
            <small>Just now</small>
        </div>
    </Link>
  )
}

export default PostAuthor