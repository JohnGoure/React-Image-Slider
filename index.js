import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <p>Helllllloooooo</p>
        )
    };
}

ReactDOM.render(<App/>,
    document.querySelector('.app')
);
