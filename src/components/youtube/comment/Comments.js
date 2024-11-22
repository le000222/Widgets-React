import React, { useState } from "react";
import Comment from "./Comment";
import AddCommentFromUser from "./AddCommentFromUser";

const Comments = ({ selectedVid }) => {
	const [comments, setComments] = useState([
		{
			id: 1,
			name: "Eri Le",
			avatar:
				"https://external-preview.redd.it/_NbrzqmPVMTq2tvCjxlh9GMv5sw4-8oBAO_th0M6wZk.png?auto=webp&s=0cd3d8057d2bcbb682c091c264b7f7c730aa9e2e",
			date: "Today at 5:43PM",
			comment: "How amazing this is!",
		},
		{
			id: 2,
			name: "Alex Pham",
			avatar:
				"https://anime.houseart.me/wp-content/uploads/2020/02/Avatars.-on-Instagram-%E2%80%9CRandom-bnha-av-@iqufd.spc%E2%80%9D.jpg",
			date: "2 days ago",
			comment: "This is such an amazing videos",
		},
	]);

	if (!selectedVid) {
		return;
	}

	const onAddComment = commentFromUser => {
		setComments([...comments, commentFromUser]);
	};

	const renderedUsers = comments.map(user => {
		return <Comment user={user} key={user.id} />;
	});

	return (
		<div className="ui threaded comments">
			<h3 className="ui dividing header">Comment</h3>
			{renderedUsers}
			<form className="ui reply form">
				<div className="field">
					<AddCommentFromUser onAddComment={onAddComment} />
				</div>
			</form>
		</div>
	);
};

export default Comments;
