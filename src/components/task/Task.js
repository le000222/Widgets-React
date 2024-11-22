import React from 'react';
import moment from "moment";
import { MdOutlineDoneOutline, MdDelete, MdModeEdit } from "react-icons/md";

const Task = ({ task, onDeleteTask, onToggleReminder, setEditTask }) => {
	const checkDueDate = dueDate => {
		const due = new Date(dueDate);
		const today = new Date();
		return today - due > 0 ? "pass" : "";
	};

	return (
		<div
			className={`background ${task.reminder ? "active" : ""}`}
			onDoubleClick={() => onToggleReminder(task.id)}
		>
			<div className="card task">
				<div className="content">
					<h3 className="task-header">
						{task.name}
						<div className="icon-delete" onClick={() => onDeleteTask(task.id)}>
							<MdDelete />
						</div>
					</h3>
					<div className={`due-date ${checkDueDate(task.date)}`}>
						<strong>
							{moment(task.date).format("MMMM D, YYYY")}
							{task.time ? ` at ${task.time}` : ""}
						</strong>
					</div>
					<i>
						<div className="description" id="description">
							{task.description}
						</div>
					</i>
				</div>
				<div className="extra content">
					<div className="ui two buttons">
						<div
							className="ui basic grey button"
							onClick={() => {
								setEditTask(task);
							}}
						>
							<h3>
								<MdModeEdit />
							</h3>
						</div>
						<div
							className="ui basic green button"
							onClick={() => onDeleteTask(task.id)}
						>
							<h3>
								<MdOutlineDoneOutline />
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Task;
