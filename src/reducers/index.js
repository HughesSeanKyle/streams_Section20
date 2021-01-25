import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // 1.1
import authReducer from './authReducer';
import streamReducer from './streamReducer';

// Dummy code for redux setup
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});

/*
// 1.1
When importing a NAMED IMPORT and renaming methods/funcions etc from a module you can use the 'as' keyword in the import statement. 

In addition formReducer must be assigned to a a key named 'form'. if not  done redux will throw an error. 
*/