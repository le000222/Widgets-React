import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
  },
];

const Translate = () => {
  const [lang, setLang] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label className='label'>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='Select a Language'
        options={options}
        selected={lang}
        onSelectedChange={setLang}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert lang={lang} text={text} />
    </div>
  );
};

export default Translate;
