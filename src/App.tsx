import './App.css';

import { useState } from 'react';

import { Renderer } from './module/renderer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Renderer />
        </div>
    );
}

export default App;
