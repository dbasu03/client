import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/dummypostimg1.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
        <div className="containier post-detail__container">
            <div className="post-detail__header">
                <PostAuthor/>
                {/*<div className="post-detail__buttons">
                    <Link to={'/posts/user/edit'} className='btn sm primary'>Edit</Link>
                    <Link to={'/posts/user/delete'} className='btn sm danger'>Danger</Link>
                </div>*/}
            </div>
            <h1>This is the post title! </h1>
            <div className='post-detail__thumbnail'>
                <img src={Thumbnail} alt="" />
                
            </div>
            <p>
                    This is a Paragraph here!
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quas dolorum dolor consequatur voluptas veritatis? Minus, recusandae! Temporibus, dicta animi harum ut esse, asperiores quis repudiandae labore excepturi ex ipsam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel facere beatae corrupti dicta possimus voluptas laudantium illo porro perferendis voluptates praesentium quibusdam impedit, id iusto! Blanditiis vel perferendis tenetur.

            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quaerat nemo, illum modi sint delectus dolorum est id, ea doloribus vitae ipsum quasi distinctio architecto labore sunt, omnis qui repellendus.

            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quis, distinctio sit ad rem neque est quibusdam nam exercitationem tempora laborum quisquam totam, quaerat pariatur saepe sunt velit doloremque culpa?
            </p>
        </div>
    </section>
  )
}

export default PostDetail