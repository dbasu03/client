import React, { useState } from 'react'
import DUMMY_POSTS from '../data'
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
  
    const [posts, setPosts] =useState(DUMMY_POSTS)

    return(
      <section className='author__posts'>
        {
          posts.length> 0 ? <div className='container author__posts-container'>
            
            {
            posts.map(({id, Thumbnail, category, title, desc, authorID}) => 
            <PostItem key={id} postID={id} Thumbnail={Thumbnail} category={category} title={title} desc={desc} authorID={authorID}/>)
        }
          </div> : <h2 className='center'> No posts found</h2>
        }
      </section>
    )
  
}

export default AuthorPosts