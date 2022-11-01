import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link href='/' label='Accordion' />
      <Link href='/list' label='List' />
      <Link href='/dropdown' label='Dropdown' />
      {/* <Link href='/translate' label='Translate' /> */}
      <Link href='/youtube' label='Youtube' />
      <Link href='/task' label='Task' />
    </div>
  );
};

export default Header;
