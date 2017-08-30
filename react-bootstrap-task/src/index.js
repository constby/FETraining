import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
