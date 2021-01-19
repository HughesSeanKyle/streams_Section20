import React from 'react';
import keys from '../config/keys';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }; // 1.3

    componentDidMount() { // 1
        window.gapi.load('client:auth2', () => {
            // Called after 'client:auth2' successfully loaded up
            window.gapi.client.init({
                clientId: keys.googleClientID,
                scope: 'email'
            }).then(() => { // 1.1
                this.auth = window.gapi.auth2.getAuthInstance(); // 1.2
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            });
        });
    }

    // Helper method
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I do not know if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>;
        } else {
            return <div>I am not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
};

export default GoogleAuth;

/*
// 1
Anytime component is rendered onto the screen we are going to try to load up client portion of the gapi library. 

// 1.1 
Will envoke after a library has successfully initialized itself. 

// 1.2
Reference to auth instance that will enable user to sign in/out or get users current authentication status.

// 1.3
Reason for null is that we do not know if the user user is signed in or not. 
*/