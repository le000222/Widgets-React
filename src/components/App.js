import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
// import Translate from './translate/Translate';
import Route from './header/Route';
import Header from './header/Header';
import Youtube from './youtube/Youtube';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS ramework',
  },
  {
    title: 'Why do we use React?',
    content: 'React is a fav JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'We use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'A Pretty Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a Color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      {/* <Route path='/translate'>
        <Translate />
      </Route> */}
      <Route path='/youtube'>
        <Youtube />
      </Route>
    </div>
  );
};

export default App;
