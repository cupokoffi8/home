import React, { useState } from 'react';
import { EMenuItems } from './E-MenuItems';
import '../Navbar/E-Dropdown.css'; 
import { Link } from 'react-router-dom';

function EDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'e-dropdown-menu clicked' : 'e-dropdown-menu'}
      >
        {EMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="e-dropdown-link"
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

export default EDropdown;
