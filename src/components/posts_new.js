import React, {Component} from 'react';
// Component and function
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component{
    renderField(field){
        return(
            <div className="form-group">
                <label htmlFor="">{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );

    }
    onSubmit(values){
        console.log(values);
    }
    render(){
        const {handleSubmit} = this.props;

        return(
            <div className="container">
                <form action="" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};
    // validate the inputs from 'values'
    if(!values.title){
        errors.title = "Enter a title!";
    }
    if(!values.categories){
        errors.categories = "Enter somre categories";
    }
    if(!values.content){
        errors.content = "Enter sobre content please";
    }
    // if errors is empty, the form is fine to submit
    // if errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);