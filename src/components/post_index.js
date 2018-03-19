import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostIndex extends Component {
    componentDidMount(){
        // data loading process
        this.props.fetchPosts();
    }
    render(){
        return(
            <div>PostIndex</div>
        );
    }
}

// with a little shortCut instead of using mapDispatchToProps
export default connect(null, {fetchPosts})(PostIndex);