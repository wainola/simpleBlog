import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {
    componentDidMount(){
        // data loading process
        this.props.fetchPosts();
    }
    renderPosts(){
        return _.map(this.props.posts, post => {
            return(
                <li key={post.id} className="list-group-item">
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        })
    }
    render(){
        return(
            <div>
                <div>
                    <Link to="/posts/new" className="btn btn-default">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
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