import React, { useState } from 'react';
import { LANGUAGES } from "../../resources/constants";
import Dropdown from "../basic/Dropdown";
import Convert from "./Convert";

const Translate = () => {
	const [lang, setLang] = useState(LANGUAGES[0]);
	const [text, setText] = useState("");

	return (
		<div className="ui container">
			<div className="ui form">
				<div className="field">
					<label className="label">Enter Text</label>
					<input value={text} onChange={e => setText(e.target.value)} />
				</div>
			</div>
			<Dropdown
				label="Select a Language"
				options={LANGUAGES}
				selected={lang}
				onSelectedChange={setLang}
			/>
			<hr />
			<h3 className="ui header">Output</h3>
			<Convert lang={lang} text={text} />
		</div>
	);
};

export default Translate;
