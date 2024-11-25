import React, { useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import "./Tasks.css";
import { TASKS } from "../../resources/constants";

const Tasks = () => {
	const [showAddTask, setShowAddTask] = useState(true);
	const [tasks, setTasks] = useState(
		TASKS.sort((a, b) => new Date(a.date) - new Date(b.date))
	);
	const [editTask, setEditTask] = useState(null);

	const onAddTask = task => {
		setTasks([...tasks, task]);
	};

	const onDeleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	const onToggleReminder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	const onEditTask = ({ id, name, description, date, time, reminder }) => {
		const updatedTasks = tasks.map(task =>
			task.id === id
				? { ...task, id, name, description, date, time, reminder }
				: task
		);
		setTasks(updatedTasks);
	};

	return (
		<div className="ui container">
			<div className="ui very padded segment">
				<div>
					<h2>
						Task Tracker
						<input
							className="ui right floated button"
							type="submit"
							value={showAddTask ? "Close" : "Add"}
							onClick={e => setShowAddTask(!showAddTask)}
						/>
					</h2>
				</div>
				{showAddTask && (
					<AddTask
						onAddTask={onAddTask}
						editTask={editTask}
						onEditTask={onEditTask}
						setEditTask={setEditTask}
					/>
				)}
				<div className="ui three column grid">
					{tasks.length > 0
						? tasks.map(task => (
								<div className="column" key={task.id}>
									<Task
										key={task.id}
										task={task}
										onDeleteTask={onDeleteTask}
										onToggleReminder={onToggleReminder}
										setEditTask={setEditTask}
									/>
								</div>
						  ))
						: "No Tasks To Show"}
				</div>
			</div>
		</div>
	);
};

export default Tasks;
