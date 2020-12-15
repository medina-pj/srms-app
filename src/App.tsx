import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Wrapper from 'components/Wrapper';

require('dotenv').config();

const App = () => {
  return (
    <Router>
      <Switch>
        <Wrapper>
          <div>Children</div>
        </Wrapper>
      </Switch>
    </Router>
  );
};

export default App;
