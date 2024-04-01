import React, { useState } from 'react'
import PostItem from './PostItem'
//import { DUMMY_POSTS } from '../data'
import DUMMY_POSTS from '../data';


/*const DUMMY_POSTS =[
    {
        id:'1',
        thumbnail: Thumbnail,
        category: 'papers',
        title: 'Title 1',
        desc: 'This is the description',
        authorID:3
    },
    {
        id:'2',
        thumbnail: Thumbnail,
        category: 'papers',
        title: 'Title 1',
        desc: 'This is the description',
        authorID:3
    },
    {
        id:'3',
        thumbnail: Thumbnail,
        category: 'papers',
        title: 'Title 1',
        desc: 'This is the description',
        authorID:3
    },
]*/

const Posts = () => {
    const[posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
       
        {
            posts.map(({id, Thumbnail, category, title, desc, authorID}) => 
            <PostItem key={id} postID={id} Thumbnail={Thumbnail} category={category} title={title} desc={desc} authorID={authorID}/>)
        }
        
    </section>
  )
}

export default Posts