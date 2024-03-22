import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import tmuLogo from '../../assets/tmu-logo.svg';
import '../Nav/Nav.css';
import './Nav-Authenticated.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMessage, faPlus, faUser} from '@fortawesome/free-solid-svg-icons'

const StyledBtn = styled((props) => (
  <Button

    {...props}
  />
))(({ theme }) => ({
  '& .MuiButton-endIcon': {
    margin: 0,
  }
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 20,
    marginTop: theme.spacing(1),
    minWidth: '9em',
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '1em 0',
    },
    '& .MuiMenuItem-root': {
      justifyContent: 'center',
      '& .MuiSvgIcon-root': {
        fontSize: 14,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function NavAuthenticated() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <img src={tmuLogo} id='logo-nav' alt='TMU Logo'></img>

      <div id='link-container'>
        <span className='nav-btn'>Classified Ads</span>
        <span className='nav-btn'><FontAwesomeIcon className='nav-icon' icon={faPlus} style={{color: "#004c9b"}} /></span>
        <span className='nav-btn'><FontAwesomeIcon className='nav-icon' icon={faMessage} style={{color: "#004c9b"}} /></span>
        <span className='nav-btn' id='profile-link'>
        <FontAwesomeIcon id='profile-image' className='nav-icon' icon={faUser} style={{color: "#004c9b"}} />
          John Doe
        </span>
      </div>

      <div id='sm-link-container'>
        <StyledBtn
          id="menu-btn"
          aria-controls={open ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<FontAwesomeIcon icon={faBars} style={{
            color: "#004c9b",
            margin: 0
          }} />}
          style={{
            background: '#FFF',
            padding: 16
          }}
        >
        </StyledBtn>
        <StyledMenu
          id="menu"
          MenuListProps={{
            'aria-labelledby': 'menu-btn',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <span className='nav-btn'>Classified Ads</span>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <span className='nav-btn'><FontAwesomeIcon className='nav-icon' icon={faPlus} style={{color: "#004c9b"}} /></span>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <span className='nav-btn'><FontAwesomeIcon className='nav-icon' icon={faMessage} style={{color: "#004c9b"}} /></span>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <span className='nav-btn' id='profile-link'>
              <FontAwesomeIcon id='profile-image' className='nav-icon' icon={faUser} style={{color: "#004c9b"}} />
              John Doe
            </span>
          </MenuItem>
        </StyledMenu>
      </div>
    </header>
  );
}

export default NavAuthenticated;
