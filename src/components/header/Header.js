import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="ui three item menu">
			<Link className="item" to="/">
				Youtube
			</Link>
			<Link className="item" to="/wikisearch">
				Wiki Search
			</Link>
			<Link className="item" to="/task">
				To-Do List
			</Link>
			{/* <Link className="item" to="/translate">
				Dictionary
			</Link> */}
		</div>
	);
};

export default Header;
