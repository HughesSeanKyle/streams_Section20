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
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // Helper methods
    // 1.4
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() { // 1.5
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );
        }
    };

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

// 1.4
Function will be called anytime that users authentication status changes. 
Callback function therefore arrow function sp that it's context is bound to the component. 

// 1.5
In the case of the if statement the null can also be replace with a spinner. 
*/