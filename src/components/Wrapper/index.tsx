import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';

//Material Ui Components
import { CssBaseline } from 'components/MaterialUi/Core';

//Styles
import useStyles from './style';

//Components
import Header from './Header';
import Sidebar from './Sidebar';

interface IProps {
  children: ReactNode;
}

const AppWrapper: React.FC<IProps> = ({ children }) => {
  const classes = useStyles();
  const [sidebarState, toggleSidebar] = useState(true);

  return (
    <div>
      <CssBaseline />

      <Header isSidebarOpen={sidebarState} toggleSidebar={() => toggleSidebar(!sidebarState)} />

      <Sidebar isSidebarOpen={sidebarState} toggleSidebar={() => toggleSidebar(!sidebarState)} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: sidebarState,
        })}>
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default AppWrapper;
