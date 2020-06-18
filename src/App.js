import React, { Fragment } from 'react';
import './App.css';
import styled from 'styled-components';

import Header from './Components/Header.js';
import Profile from './Components/Profile.js';

const AppWrapper = styled.div`
  background-color: #fafafa;
`;

function App() {
  return (
    <Fragment>
      <AppWrapper>
        <Header />

        <Profile />
      </AppWrapper>
    </Fragment>
  );
}

export default App;
