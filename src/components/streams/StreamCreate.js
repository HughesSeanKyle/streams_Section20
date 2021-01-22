import React from "react";
import { Field, reduxForm } from 'redux-form'; // 1.1

class StreamCreate extends React.Component {
    renderInput({ input, label }) { //1.4
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} /> 
            </div>
        ); 
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() { // 1.3 
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        ); 
    }
}

const validate = (formValues) => { // 1.5
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a title";
    }

    if (!formValues.title) {
        errors.description = "You must enter a description";
    }

    return errors;
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
<input {...input} /> - Will take all key value pairs and add them as properties to the input element

// 1.5
At this point the validate function must be hooked/wired up to redux-form
*/