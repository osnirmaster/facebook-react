import React from 'react';

import Comment from '../components/Comment';

function Post({ data }){

  return (
    <div className="main-comment">
      <div className="header-comment">
          <div className="avatar-comment">
            <img src={data.author.avatar}></img>
            <div className="user-comment">
              <h2>{data.author.name}</h2>
              <span>{data.date}</span>
            </div>
          </div>
      </div>
      <div className="content-comment"> 
        <p>{ data.content}</p>
      </div>
      { data.comments.map(comment => 
      <Comment 
        key={comment.id} 
        data={comment} />)}
    </div>
  )

}

export default Post;