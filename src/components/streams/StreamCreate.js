import React from "react";
import { Field, reduxForm } from 'redux-form'; // 1.1

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, label, meta }) => { //1.4
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" /> 
                {this.renderError(meta)}
            </div>
        ); 
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() { // 1.3 
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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

    return errors; // 1.7
} 

export default reduxForm({
    form: 'streamCreate',
    validate: validate  // 1.6
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

// 1.6
Can be condensed

// 1.7
The below can be seen as the big connection between the error object in validate and the field attibute 'name' in the redux-form field component. 

If the error object has an identical name as the name provided within the field component's name attribute and it contains a string that error message will be passed down to the 'this.renderInput' function. 

// 1.8
renderInput({ input, label, meta }) { //1.4
    The destructured value 'meta' in this case holds all meta data pertaining to each field componenent. The meta data included the error that was passed through from the validate function. 
*/