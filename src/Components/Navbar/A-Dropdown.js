import React, { useState } from 'react';
import { AMenuItems } from './A-MenuItems';
import './A-Dropdown.css';
import { Link } from 'react-router-dom';

function ADropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'a-dropdown-menu clicked' : 'a-dropdown-menu'}
      >
        {AMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="a-dropdown-link"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ADropdown;
