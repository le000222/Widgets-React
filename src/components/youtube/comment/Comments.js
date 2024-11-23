import React, { useState } from "react";
import Comment from "./Comment";
import AddCommentFromUser from "./AddCommentFromUser";
import { COMMENTS } from "../../../resources/constants";

const Comments = ({ selectedVid }) => {
	const [comments, setComments] = useState(COMMENTS);

	if (!selectedVid) {
		return;
	}

	const onAddComment = commentFromUser => {
		setComments([...comments, commentFromUser]);
	};
	const handleReply = (commentId, replyText) => {
		setComments(prevComments =>
			prevComments.map(comment =>
				comment.id === commentId
					? {
							...comment,
							replies: [
								...comment.replies,
								{ text: replyText, date: new Date().toLocaleString() },
							],
					  }
					: comment
			)
		);
	};

	return (
		<div className="ui threaded comments">
			<h3 className="ui dividing header">Comment</h3>
			<div className="comments">
				{comments.map(user => (
					<div key={user.id}>
						<Comment user={user} onReply={handleReply} />
					</div>
				))}
			</div>
			<form className="ui reply form">
				<div className="field">
					<AddCommentFromUser onAddComment={onAddComment} />
				</div>
			</form>
		</div>
	);
};

export default Comments;
