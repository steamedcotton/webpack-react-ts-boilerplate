import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

import { App } from './App';
import { defaultTheme } from './theme/default';

import './main.css';

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('app')
);
