import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import "./Comments.css";

const Comment = ({ user, onReply }) => {
	const [likes, setLikes] = useState(0);
	const [showReplyInput, setShowReplyInput] = useState(false);
	const [replyText, setReplyText] = useState("");

	const handleLike = () => {
		setLikes(prevLikes => prevLikes + 1);
	};
	const handleReply = () => {
		setShowReplyInput(true);
	};
	const handleReplySubmit = () => {
		if (replyText.trim()) {
			onReply(user.id, replyText); // Pass the reply to the parent
			setReplyText(""); // Clear the input
			setShowReplyInput(false); // Hide the input
		}
	};

	return (
		<div className="comment">
			<div className="avatar">
				<img src={user.avatar} alt="avatar" />
			</div>
			<div className="content">
				<div className="author">
					{user.name}
					<div className="metadata">
						<div className="date">{user.date}</div>
					</div>
				</div>

				<div className="text">{user.comment}</div>
				<div className="actions comment">
					<div className="reply" onClick={() => handleLike()}>
						<AiFillLike /> Like {likes}
					</div>
					<div className="like" onClick={() => handleReply()}>
						Reply
					</div>
				</div>
			</div>
			<div className="comments">
				{user.replies.length > 0 &&
					user.replies.map((reply, index) => (
						<div key={index}>
							<div className="comment">
								<div class="avatar">
									<img src={user.avatar} alt="avatar" />
								</div>
								<div className="content">
									<div className="author">
										{user.name}
										<div className="metadata">
											<div className="date">{reply.date}</div>
										</div>
									</div>

									<div className="text">{reply.text}</div>
								</div>
							</div>
						</div>
					))}
				{showReplyInput && (
					<div className="reply-input">
						<form className="ui reply form">
							<div className="field">
								<textarea
									rows={1}
									value={replyText}
									onChange={e => setReplyText(e.target.value)}
									placeholder="Write your reply..."
									style={{
										height: "auto",
									}}
								/>
							</div>
							<div
								className="ui blue labeled submit icon button"
								onClick={handleReplySubmit}
							>
								<i className="icon edit"></i> Add Reply
							</div>
							<div
								className="ui button"
								onClick={() => setShowReplyInput(false)}
							>
								Cancel
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default Comment;
