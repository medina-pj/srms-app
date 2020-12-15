import React from 'react';
import { Link } from 'react-router-dom';

//Material Ui Components
import {
  AccountBalanceOutlinedIcon,
  AssignmentOutlinedIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExitToAppIcon,
  ListAltOutlinedIcon,
  LocalPrintshopOutlinedIcon,
  SettingsOutlinedIcon,
} from 'components/MaterialUi/Icons';

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from 'components/MaterialUi/Core';

//Styles
import useStyles from './style';

type Props = {
  isSidebarOpen: boolean;
  toggleSidebar: any;
};

const SIDEBAR_ITEMS = [
  {
    icon: <AssignmentOutlinedIcon />,
    text: 'Admission',
    path: '/',
  },
  {
    icon: <ListAltOutlinedIcon />,
    text: 'Student Record',
    path: '/',
  },
  {
    icon: <AccountBalanceOutlinedIcon />,
    text: 'Student Finances',
    path: '/',
  },
  {
    icon: <SettingsOutlinedIcon />,
    text: 'Settings',
    path: '/',
  },
  {
    icon: <LocalPrintshopOutlinedIcon />,
    text: 'Print Records',
    path: '/',
  },
];

const Sidebar: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  const classes = useStyles();
  const theme = useTheme();

  const onLogout = () => {
    //Logout User
  };

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={isSidebarOpen}
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleSidebar}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>

      <Divider />

      <List>
        {SIDEBAR_ITEMS.map(({ icon, text, path }) => (
          <ListItem button component={Link} to={path}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem button onClick={onLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={'Logout'} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
