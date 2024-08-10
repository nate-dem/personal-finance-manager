import React from 'react';
import { Box, Button, Typography, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LandingPage: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#262626',
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: '4rem',
          background: 'linear-gradient(45deg, #8A2BE2 10%, #FFB6C1 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          mb: 2
        }}
      >
        Plutus
      </Typography>
      <Typography 
        variant="subtitle1" 
        sx={{
          color: '#FFB6C1',
          textAlign: 'center',
          mb: 4,
          fontSize: '1rem',
          fontWeight: 300,
        }}
      >
        Simplify Your Finances
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button 
          variant="outlined" 
          sx={{ 
            color: '#FFB6C1', 
            borderColor: '#FFB6C1',
            '&:hover': { backgroundColor: 'rgba(255,182,193,0.1)' }
          }}
        >
          Get Started
        </Button>
        <Button 
          variant="outlined" 
          sx={{ 
            color: '#FFB6C1', 
            borderColor: '#FFB6C1',
            '&:hover': { backgroundColor: 'rgba(255,182,193,0.1)' }
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
          sx={{ 
            color: '#FFB6C1', 
            borderColor: '#FFB6C1',
            '&:hover': { backgroundColor: 'rgba(255,182,193,0.1)' }
          }}
        >
          Services
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'services-button',
          }}
          PaperProps={{
            sx: {
              backgroundColor: '#333',
              color: '#FFB6C1',
            }
          }}
        >
          <MenuItem 
            onClick={handleClose}
            sx={{ '&:hover': { backgroundColor: 'rgba(255,182,193,0.1)' } }}
          >
            Manage Accounts
          </MenuItem>
          <MenuItem 
            onClick={handleClose}
            sx={{ '&:hover': { backgroundColor: 'rgba(255,182,193,0.1)' } }}
          >
            Track Portfolio
          </MenuItem>
          <MenuItem 
            onClick={handleClose}
            sx={{ '&:hover': { backgroundColor: 'rgba(255,182,193,0.1)' } }}
          >
            Set Budget
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default LandingPage;