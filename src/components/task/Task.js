import React from 'react';

const Task = ({ task, onDeleteTask, onToggleReminder }) => {
  return (
    <div
      className={`background ${task.reminder ? 'active' : ''}`}
      onDoubleClick={() => onToggleReminder(task.id)}
    >
      <div className='content'>
        <div className='header'>
          {task.name}
          <div className='task' onClick={() => onDeleteTask(task.id)}>
            <i className='ui right floated close icon'></i>
          </div>
        </div>
        <div className='description'>{task.day}</div>
      </div>
    </div>
  );
};

export default Task;
