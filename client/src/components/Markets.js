import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsData } from '../actions';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import PostCard from './PostCard';

class Markets extends Component {
  componentDidMount() {
    this.props.fetchPostsData();
  }

  renderPosts() {
    const { data, isFetching } = this.props.posts;
    if (isFetching) {
      return <div>Loading...</div>;
    }

    if (data) {
      return data.map(post => <PostCard key={post._id} data={post} />);
    }

    return null;
  }

  renderAddPostBtn() {
    const { data: { isAdmin } } = this.props.currentUser;
    if (isAdmin) {
      return (
        <Link to='/markets/new'>
          <Button>Add New Post</Button>
        </Link>
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
        {this.renderAddPostBtn()}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser, posts }) => {
  return {
    currentUser,
    posts
  };
};

export default connect(mapStateToProps, { fetchPostsData })(Markets);
