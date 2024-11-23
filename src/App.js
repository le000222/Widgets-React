import WikiSearch from "./components/wikiSearch/WikiSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Youtube from "./components/youtube/Youtube";
import Tasks from "./components/task/Tasks";
import Translate from "./components/translate/Translate";
import VideoDetail from "./components/youtube/videoList/VideoDetail";
import { useState } from "react";

const App = () => {
	const [allVideos, setAllVideos] = useState([]);
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Youtube allVideos={allVideos} setAllVideos={setAllVideos} />
					}
				/>
				<Route
					path="/youtube"
					element={<VideoDetail allVideos={allVideos} />}
				/>
				<Route path="/task" element={<Tasks />} />
				<Route path="/wikisearch" element={<WikiSearch />} />
				{/* <Route path="/translate" element={<Translate />} /> */}
			</Routes>
		</Router>
	);
};

export default App;
