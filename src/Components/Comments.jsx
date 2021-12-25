import React from 'react'
import { useEffect, useState } from 'react'

export const Comments = ({postId}) => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(data => data.json())
      .then(json => setComments(json))
  }, [])

  if (!comments.length) return <div>Loading comments...</div>

  return (
    <div className="comments">
        <h3 className='comments__title'>Comments:</h3>
        {
          comments.map(comment => (
            <div className="comment" key={comment.id}>
              <span className='comment__author'>{comment.email}</span>
              <div className="comment__body">
                {comment.body}
              </div>
            </div>
          ))
        }
    </div>
  )
}
