import React from "react";
import { Field, reduxForm } from 'redux-form'; // 1.1

class StreamCreate extends React.Component {
    renderInput(formProps) {
        return <input {...formProps.input} /> //1.4
    }

    render() { // 1.3 
        return(
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        ); 
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate); // 1.2

/*
// 1.1
Field is a component
reduxForm is a function - Has the same functionality as the connect function form the react-redux library. 

// 1.2
reduxForm will call a function and we immediately call the function with StreamCreate. 

// 1.3
<Field /> - Is a component that that will solicit any form of input from the user.  

// 1.4 
Will take all key value pairs and add them as properties to the input element
*/