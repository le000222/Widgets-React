import WikiSearch from "./components/wikiSearch/WikiSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import Youtube from "./components/youtube/youtubeHome/YoutubeHome";
import Tasks from "./components/task/Tasks";
import Translate from "./components/translate/Translate";
import VideoDetail from "./components/youtube/videoList/VideoDetail";

const App = () => {
	const [allVideos, setAllVideos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("dogs");

	return (
		<Router>
			<Header
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				setAllVideos={setAllVideos}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Youtube
							allVideos={allVideos}
							setAllVideos={setAllVideos}
							searchTerm={searchTerm}
						/>
					}
				/>
				<Route
					path="/youtube"
					element={<VideoDetail allVideos={allVideos} />}
				/>
				<Route path="/task" element={<Tasks />} />
				<Route path="/wikisearch" element={<WikiSearch />} />
				<Route path="/translate" element={<Translate />} />
			</Routes>
		</Router>
	);
};

export default App;
