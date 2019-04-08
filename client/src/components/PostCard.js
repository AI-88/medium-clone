import React from 'react';
import { Card } from 'antd';

const PostCard = ({ data: { id, title, description, coordinates } }) => {
  return (
    <Card title={title}>
      <p>{description}</p>
      <p>{coordinates}</p>
    </Card>
  );
};

export default PostCard;
