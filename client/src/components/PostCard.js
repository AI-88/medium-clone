import React from 'react';
import { Card, Typography } from 'antd';

const PostCard = ({ data: { id, title, description, coordinates } }) => {
  return (
    <Card title={title}>
      <Typography>{description}</Typography>
      <Typography>{coordinates}</Typography>
    </Card>
  );
};

export default PostCard;
