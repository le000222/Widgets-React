import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      alert('Please enter task name');
      return;
    }
    const id = Math.floor(Math.random() * 10000) + 1;
    onAddTask({ id, name, day, reminder });

    setName('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='ui form' onSubmit={onSubmit}>
      <div className='field'>
        <label className='label'>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='field'>
        <label className='label'>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='field'>
        <label className='label'>Reminder</label>
        <div className='ui toggle checkbox'>
          <input
            type='checkbox'
            name='public'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          <label></label>
        </div>
      </div>
      <div className='field'>
        <label className='label'></label>
        <input className='ui button' type='submit' value='Save Task' />
      </div>
    </form>
  );
};

export default AddTask;
