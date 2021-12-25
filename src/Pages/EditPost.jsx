import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const EditPost = () => {

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
    <div className='edit-post'>
      <div className="post-panel">
        <button className="btn" onClick={ () => { navigate(-1) } }>Cancel edit</button>
        <button className="btn" onClick={ () => { navigate(-1) } }>Save</button>
      </div>
      <form className='edit-post-form'>
        <label>
          <h4 className='edit-post-form__label'>Title:</h4>
          <input className="edit-post-form__title" type="text" value={post.title}></input>
        </label>
        <label>
          <h4 className='edit-post-form__label'>Body:</h4>
          <textarea className='edit-post-form__body'>
            {post.body}
          </textarea>
        </label>
      </form>     
    </div>
  )
}