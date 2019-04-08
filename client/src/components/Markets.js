import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsData } from '../actions';
import { Link } from 'react-router-dom';
import { Button, Spin } from 'antd';
import PostCard from './PostCard';

class Markets extends Component {
  componentDidMount() {
    this.props.fetchPostsData();
  }

  renderPosts() {
    const { data, isFetching } = this.props.posts;
    if (isFetching) {
      return <Spin />;
    }

    if (data) {
      return (
        <div>
          {data.map(post => <PostCard key={post._id} data={post} />)}
          {this.renderAddPostBtn()}
        </div>
      );
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
      <>
        {this.renderPosts()}
      </>
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
