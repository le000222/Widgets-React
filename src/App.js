import WikiSearch from "./components/wikiSearch/WikiSearch";
// import Route from "./components/Route";
import Header from "./components/header/Header";
import Youtube from "./components/youtube/Youtube";
import Tasks from "./components/task/Tasks";
import Translate from "./components/translate/Translate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoDetail from "./components/youtube/videoList/VideoDetail";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Youtube />} />
				<Route path="/youtube" element={<VideoDetail />} />
				<Route path="/task" element={<Tasks />} />
				<Route path="/wikisearch" element={<WikiSearch />} />
				<Route path="/translate" element={<Translate />} />
			</Routes>
		</Router>
	);
};

export default App;
