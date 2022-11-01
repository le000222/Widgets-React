import React, { useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import './Task.css';

const Tasks = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Compilers Assignment Due',
      day: 'Sun 6 Nov 2022 at 11:59pm',
      reminder: true,
    },
    {
      id: 2,
      name: 'Grocery',
      day: 'Sat 28 Nov 2022 at 9am-11am',
      reminder: false,
    },
    {
      id: 3,
      name: 'Do homework',
      day: 'Mon, Wed, Thurs weekly',
      reminder: true,
    },
  ]);

  const onAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const renderedTasks = tasks.map((task) => {
    return (
      <div className='item'>
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleReminder={onToggleReminder}
        />
      </div>
    );
  });

  return (
    <div className='ui very padded segment'>
      <div>
        <h2>
          Task Tracker
          <input
            className='ui right floated button'
            type='submit'
            value={showAddTask ? 'Close' : 'Add'}
            onClick={(e) => setShowAddTask(!showAddTask)}
          />
        </h2>
      </div>
      <div>{showAddTask && <AddTask onAddTask={onAddTask} />}</div>
      <div className='ui relaxed list'>
        {tasks.length > 0 ? renderedTasks : 'No Tasks To Show'}
      </div>
    </div>
  );
};

export default Tasks;
