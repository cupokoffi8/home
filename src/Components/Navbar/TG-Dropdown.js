import React, { useState } from 'react';
import { TGMenuItems } from './TG-MenuItems';
import './TG-Dropdown.css';
import { Link } from 'react-router-dom';

function TgDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'tg-dropdown-menu clicked' : 'tg-dropdown-menu'}
      >
        {TGMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
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

export default TgDropdown;
