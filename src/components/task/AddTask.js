import { useEffect, useState } from "react";

const AddTask = ({ onAddTask, editTask, onEditTask, setEditTask }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [description, setDescription] = useState("");
	const [reminder, setReminder] = useState(false);

	useEffect(() => {
		if (editTask) {
			setName(editTask.name);
			setDescription(editTask.description);
			setDate(editTask.date);
			setTime(editTask.time);
			setReminder(editTask.reminder);
		}
	}, [editTask]);

	const onSubmit = event => {
		event.preventDefault();
		//Edit task
		if (editTask) {
			onEditTask({
				id: editTask.id,
				name: name,
				description: description,
				time: time,
				date: date,
				reminder: reminder,
			});
		}
		//Add new task
		else {
			if (!name) {
				alert("Please enter task name");
				return;
			}
			const id = Math.floor(Math.random() * 10000) + 1;
			onAddTask({ id, name, date, reminder });
		}

		setEditTask(null);
		setName("");
		setDate("");
		setTime("");
		setDescription("");
		setReminder(false);
	};

	return (
		<form className="ui form task-tracker" onSubmit={onSubmit}>
			<div className="field">
				<label className="label">Task</label>
				<input
					required
					type="text"
					placeholder="Add Task"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className="field">
				<label className="label">Description</label>
				<input
					type="text"
					placeholder="Add Description"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>
			<div className="field date-time">
				<div className="task-container date">
					<label className="label">Date</label>
					<input
						required
						type="date"
						value={date}
						onChange={e => setDate(e.target.value)}
					/>
				</div>
				<div className="task-container time">
					<label className="label">Time</label>
					<input
						type="time"
						value={time}
						onChange={e => setTime(e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label">Reminder</label>
				<div className="ui toggle checkbox">
					<input
						type="checkbox"
						name="public"
						checked={reminder}
						value={reminder}
						onChange={e => setReminder(e.currentTarget.checked)}
					/>
					<label></label>
				</div>
			</div>
			<div className="field">
				<label className="label"></label>
				<input
					className="ui button"
					type="submit"
					value={editTask ? "Save Changes" : "Add Task"}
				/>
			</div>
		</form>
	);
};

export default AddTask;
