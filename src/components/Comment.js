import React from 'react';

import avatarComment from '../assets/002-birthday-and-party.png';

function Comment ({ data}){

  return (
    <div>
      <div className="line-comment"></div>
      <div className="comment-post">
        <img src={ data.author.avatar }></img>
        <div className="container-comment">
          <p> <span>{data.author.name}</span> {data.content} </p>
        </div>
      </div>
    </div>
  )
}

export default Comment;