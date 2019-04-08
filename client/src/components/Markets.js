import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsData } from '../actions';
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

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

export default connect(mapStateToProps, { fetchPostsData })(Markets);
