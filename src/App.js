import { Fragment } from 'react';

import Tabs from './components/Tabs/Tabs';

const App = () => {
  return (
    <Fragment>
      <h1>Tabs or Tabbed Interface</h1>
      <h2>Example of Tabs with Automatic Activation</h2>
      <p>These tabpanels do not contain any focusable elements and need tabindex="0" to include them in the tab sequence</p>
      <Tabs />
    </Fragment>
  );
};

export default App;
