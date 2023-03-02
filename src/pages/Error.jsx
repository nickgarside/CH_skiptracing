import React from 'react';

export default function Error() {

    document.body.style = 'background: #1b1e27;';

    return (
        <div>
            <div style={{paddingTop: '20px', textAlign: "center", backgroundColor: '#1b1e27'}}>
                <img src='logo185.png' alt="Logo" />
                <h1>The Chosen Homes Network</h1>
            </div>
            <h1 color='white' style={{textAlign: 'center'}}>Error Page</h1>
        </div>
    )
}