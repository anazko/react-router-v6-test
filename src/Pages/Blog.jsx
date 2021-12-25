import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export const Blog = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then(data => data.json())
      .then(json => setPosts(json))
  }, [])

  if (!posts.length) return <div>Loading posts...</div>

  return (
    <div>
      {
        posts.map(post => (
          <div className="post" key={post.id}>
            <Link to={`/blog/posts/${post.id}`}>{post.title}</Link> 
          </div>
        ))
      }
    </div>
  )
}
