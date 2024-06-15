import React, { useState, useEffect } from 'react';
//import '../css/navbar.css';
import '../css/bootstrap-5.0.0-beta2.min.css'
import '../css/main.css'
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';

const NavBarItem = (props) => {
  return (
    <li className="nav-item" id={props.id}>
      <a className="page-scroll d-none d-lg-block" href={props.linkType + props.name.toLowerCase()}>
        {props.name}
      </a>
    </li>
  );
};

const Navbar = (props) => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let page = document.getElementById(location.hash.slice(1));
      if (page) {
        page.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const editDisplay = () => {
    if (display) {
      alert('Unfortunately Light Mode is currently unavailable since it\'s highkey trash.');
    } else {
      let bool = !display;
      setDisplay(bool);
    }
  };

  return (
    <div className="navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls={open1 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick1}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl1}
                open={open1}
                onClose={handleClose1}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => {navigate('/'); handleClose1();}}>
                  <div className='menuop'>Home</div>
                </MenuItem>
                <MenuItem onClick={() => {navigate('/podcast'); handleClose1();}}>
                  <div className='menuop'>Podcast</div>
                </MenuItem>
                <MenuItem onClick={() => {navigate('/research'); handleClose1();}}>
                  <div className='menuop'>Research</div>
                </MenuItem>
              </Menu>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <div className="ms-auto">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <NavBarItem id={props.id} name="Home" linkType="/" />
                    <NavBarItem id={props.id} name="Podcast" linkType="/" />
                    <NavBarItem id={props.id} name="Research" linkType="/" />
                  </ul>
                </div>
                {/* Navbar links (visible on large screens) */}
              </div>
              {/* Navbar collapse */}
              {/* Header button (visible on all screens) */}
            </nav>
            {/* Navbar */}
          </div>
        </div>
        {/* Row */}
      </div>
      {/* Container */}
    </div>
  );
}

export default Navbar;