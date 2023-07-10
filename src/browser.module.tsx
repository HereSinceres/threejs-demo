import React from 'react';
import { provider } from 'react-ioc';

import App from './App';

export const BrowserModule = provider( )(() => <App />);
