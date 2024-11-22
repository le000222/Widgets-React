import React, { useState } from 'react';

const AddCommentFromUser = ({ onAddComment }) => {
  const [textComment, setTextComment] = useState('');

  const onAdd = (event) => {
    event.preventDefault();

    if (!textComment) {
      alert('Please enter your comment');
      return;
    }

    const id = Math.floor(Math.random() * 10000) + 1;
    const name = 'User' + id;
    const avatar = 'https://www.lookauto.es/Content/Images/particular.png';
    const today = new Date();
    const date =
      today.getMonth() +
      1 +
      '/' +
      today.getFullYear() +
      ' ' +
      today.getHours() +
      ':' +
      today.getMinutes() +
      (today.getHours() >= 12 ? 'PM' : 'AM');

    onAddComment({ id, name, avatar, date, comment: textComment });

    setTextComment('');
  };

  return (
    <div className='ui reply form'>
      <div className='field'>
        <textarea
          value={textComment}
          onChange={(event) => setTextComment(event.target.value)}
          placeholder='Add Comment'
        ></textarea>
      </div>
      <i className='icon edit'></i>
      <input
        className='ui button'
        type='submit'
        value='Add Comment'
        onClick={onAdd}
      />
    </div>
  );
};

export default AddCommentFromUser;
