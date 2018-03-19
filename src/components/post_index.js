import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import _ from 'lodash';

class PostIndex extends Component {
    componentDidMount(){
        // data loading process
        this.props.fetchPosts();
    }
    renderPosts(){
        return _.map(this.props.posts, post => {
            return(
                <li key={post.id}>
                    {post.title}
                </li>
            );
        })
    }
    render(){
        return(
            <div>
                <h3>Posts</h3>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {posts: state.posts};
}

// with a little shortCut instead of using mapDispatchToProps
export default connect(mapStateToProps, {fetchPosts})(PostIndex);