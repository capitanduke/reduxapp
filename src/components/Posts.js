import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

import { Card  } from 'react-bootstrap';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <Card style={{ marginTop: '1rem' }} key={post.id}>
                <Card.Body>
                    <Card.Title>{ post.title }</Card.Title>
                    <Card.Text>
                        { post.body }
                    </Card.Text>
                </Card.Body>
            </Card>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
    
});

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object  
}


export default connect(mapStateToProps, {fetchPosts})(Posts);