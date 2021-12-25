import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Comments } from '../Components/Comments'

export const SinglePost = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  const [post, setPost] = useState({})
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(data => data.json())
      .then(json => setPost(json))
  }, [])

  if (!post.id) return <div>Loading post...</div>

  return (
    <>
    <div className='single-post'>
      <div className="post-panel">
        <button className="btn" onClick={ () => { navigate(-1) } }>Go back to posts</button>
        <Link className="btn" to={`/blog/posts/${id}/edit`}>Edit</Link>
      </div>
      <h2 className='single-post__title'>{post.title}</h2>
      <p>{post.body}</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim qui fugiat et velit optio recusandae officia, quam tenetur, aperiam doloremque corrupti. Nesciunt repellat at recusandae amet, alias libero molestias id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium corporis magni saepe eos veniam nulla at eum odit ad!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, deserunt? Corrupti harum voluptas nemo beatae. Facilis, optio mollitia? Doloremque magni velit earum, repudiandae at modi ratione. Iure asperiores voluptatibus maxime nulla tempora reprehenderit! Ex nisi quidem, iure dolores delectus ea nulla architecto recusandae quas doloremque similique odit, minima aperiam voluptate dolorem a expedita cumque voluptatem debitis quasi eos? Soluta, tempora?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, optio. Voluptas tenetur expedita delectus esse qui, dignissimos similique eum deleniti?</p>    
    </div>
    <Comments postId={id} />
    </>
  )
}
