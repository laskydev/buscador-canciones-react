import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import axios from "axios";
import { Song } from "./components/Song";
import { Info } from "./components/Info";
function App() {
	//Set state
	const [lyricSearch, setLyricSearch] = useState({});
	const [lyric, setLyric] = useState(``);
	const [info, setInfo] = useState({});
	useEffect(() => {
		if (Object.keys(lyricSearch).length === 0) return;

		const callLyricsAPI = async () => {
			const { artist, song } = lyricSearch;
			const URL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
			const URL2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

			const [lyric, info] = await Promise.all([axios(URL), axios(URL2)]);

			setLyric(lyric.data.lyrics);
			setInfo(info.data.artists[0]);

		};
		callLyricsAPI();
	}, [lyricSearch, info]);
	return (
		<>
			<Form setLyricSearch={setLyricSearch} />
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<Info
							info={info}
						/>
					</div>
					<div className="col-md-6">
						<Song lyric={lyric} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
