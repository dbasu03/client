import React, { useState } from 'react'
import Avatar1 from '../images/Avatar.jpg'
import { Link } from 'react-router-dom'

const authorsData = [
  {id: 1, avatar: Avatar1, name: 'Name 1', posts: 3},
  {id: 2, avatar: Avatar1, name: 'Name 2', posts: 3},
  {id: 3, avatar: Avatar1, name: 'Name 3', posts: 3},
  {id: 4, avatar: Avatar1, name: 'Name 4', posts: 3},
  {id: 5, avatar: Avatar1, name: 'Name 5', posts: 3},
]
  


const Authors = () => {
  const [authors, setAuthors]=useState(authorsData)
  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/user/${id}`} className='author'>
              <div className="author__avatar">
              <img src={Avatar1} alt={`Image of ${name}`} />
              </div> 
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2>No users/authors found.</h2>}
    </section>
  )
}

export default Authors