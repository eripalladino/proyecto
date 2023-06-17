import { Link } from "react-router-dom"
import "./NavBar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography'

const options = [
  <Link to="/category/smartphones" className="nav-link" >Smartphone</Link>,
  <Link to="/category/laptops" className="nav-link" >Laptops</Link>,
  <Link to="/category/fragrances" className="nav-link" >Fragrances</Link>,
  <Link to="/category/skincare" className="nav-link" >Skincare</Link>,
  <Link to="/category/groceries" className="nav-link" >Groceries</Link>,
  <Link to="/category/home-decoration" className="nav-link" >Home-Decoration</Link>,
];

const ITEM_HEIGHT = 30;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <div>
      <nav className='nav-container'>
        <ul className='nav-ul'>
          <Link className='nav-link' to="/">Inicio</Link>
          <Link className='nav-link' to="/About">About</Link>
          <Link className='nav-link' to="/Contact">Contact</Link>

          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Typography color="rgb(blue, 48, 47)"> Categoria</Typography>
            <ArrowDropDownIcon />
          </IconButton>
          <li className='nav-link'> <ShoppingCartIcon/> <span>2</span> </li>
        </ul>

        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}> 
              {option}
            </MenuItem>
          ))}
        </Menu>
      </nav>
    </div>
  );
}