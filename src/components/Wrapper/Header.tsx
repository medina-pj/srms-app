import React from 'react';
import clsx from 'clsx';

//Material Ui Components
import { MenuIcon } from 'components/MaterialUi/Icons';
import { AppBar, IconButton, Toolbar, Typography } from 'components/MaterialUi/Core';

//Styles
import useStyles from './style';

type Props = {
  isSidebarOpen: boolean;
  toggleSidebar: any;
};

const Header: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  const classes = useStyles();
  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isSidebarOpen,
      })}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={toggleSidebar}
          edge='start'
          className={clsx(classes.menuButton, isSidebarOpen && classes.hide)}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Saint Jude Thaddeus International School YahooHoo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
