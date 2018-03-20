import React, {Component} from 'react';
// Component and function
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component{
    renderField(field){
        const { meta : { touched, error } } = field;
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
        return(
            < div className="form-group" >
                <label htmlFor="">{field.label}</label>
                <input
                    className = {className}
                    type="text"
                    {...field.input}
                />
                < div className = "text-help invalid-feedback" >
                    {
                        touched ? error : ""
                    }
                </div>
            </div>
        );

    }
    onSubmit(values){
        // pushing the data to the api
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
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
                    <Link to="/" className="btn btn-danger">Cancel</Link>
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

// connecting redux and redux form
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);