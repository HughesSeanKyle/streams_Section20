import React from 'react';
import keys from '../config/keys';

class GoogleAuth extends React.Component {
    componentDidMount() { // 1
        window.gapi.load('client:auth2', () => {
            // Called after 'client:auth2' successfully loaded up
            window.gapi.client.init({
                clientId: keys.googleClientID,
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
};

export default GoogleAuth;

/*
// 1
Anytime component is rendered onto the screen we are going to try to load up client portion of the gapi library. 
*/