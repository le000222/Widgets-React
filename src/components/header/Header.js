import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../youtube/searchBar/SearchBar";
import { useEffect } from "react";
import { NUMVIDS } from "../../resources/constants";
import YoutubeApi from "../../api/youtube";

const Header = ({ searchTerm, setSearchTerm, setAllVideos }) => {
	const location = useLocation();
	const navigate = useNavigate();

	//Initial load only
	useEffect(() => {
		if (searchTerm) onFormSubmit(searchTerm, NUMVIDS);
	}, [searchTerm]);

	const onFormSubmit = async term => {
		// Step 1: Fetch basic video information
		const searchResponse = await YoutubeApi.get("/search", {
			params: {
				q: term,
				type: "video",
				part: "snippet",
				maxResults: NUMVIDS,
			},
		});

		const videoIds = searchResponse.data.items.map(item => item.id.videoId);

		// Step 2: Fetch additional details for all videos
		const detailsResponse = await YoutubeApi.get("/videos", {
			params: {
				id: videoIds.join(","),
				part: "statistics,contentDetails",
			},
		});

		// Combine snippet and additional details
		const detailedVideos = searchResponse.data.items.map(item => {
			const details = detailsResponse.data.items.find(
				detail => detail.id === item.id.videoId
			);
			return {
				...item,
				statistics: details?.statistics,
				contentDetails: details?.contentDetails,
			};
		});
		setSearchTerm(term);
		setAllVideos(detailedVideos);
		navigate("/");
	};

	return (
		<div>
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
			<div className="ui container">
				{(location.pathname === "/" || location.pathname === "/youtube") && (
					<SearchBar onFormSubmit={onFormSubmit} />
				)}
			</div>
		</div>
	);
};

export default Header;
