import { Fragment } from 'react';

import Tabs from './components/Tabs/Tabs';

const App = () => {
  return (
    <Fragment>
      <h1>Tabs or Tabbed Interface</h1>
      <h2>Example of Tabs with Manual Activation</h2>
      <p>Each tabpanel contains a focusable element (a link).</p>
      <Tabs />
    </Fragment>
  );
};

export default App;
