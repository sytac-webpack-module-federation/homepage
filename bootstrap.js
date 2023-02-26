import React from 'react';
import ReactDom from 'react-dom';
import Homepage from './src/Homepage';

const App = () => {
    return (
        <Homepage />
    );
};

ReactDom.render(<App />, document.getElementById('app'));