import React from "react";

// build a navigation event, an object that communicates to the rest of our application to tell Route components that the url has just changed
const Link = ({ href, label, setSelected }) => {
	const onClick = event => {
		// open new tab for a specific link
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		event.preventDefault();
		setSelected(label);
		window.history.pushState({}, "", href); // change/update url using href without updating the content for that url

		//tell our routes that url has just changed
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	return (
		<a onClick={onClick} href={href} className="item">
			{label}
		</a>
	);
};

export default Link;
