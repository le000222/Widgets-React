import React from 'react';

const Comment = ({ user }) => {
  return (
    <div className='comment'>
      <div className='avatar'>
        <img src={user.avatar} alt='avatar' />
      </div>
      <div className='content'>
        <div className='author'>
          {user.name}
          <div className='metadata'>
            <div className='date'>{user.date}</div>
          </div>
        </div>

        <div className='text'>{user.comment}</div>
      </div>
      <div className='actions'>
        <a href='#' className='reply'>
          Reply
        </a>
        <a href='#' className='reply'>
          Like
        </a>
      </div>
    </div>
  );
};

export default Comment;
