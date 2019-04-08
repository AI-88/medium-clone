const mongoose = require('mongoose');
const Posts = mongoose.model('Post');

module.exports = app => {
  app.get('/api/posts', async (req, res) => {
    try {
      const posts = await Posts.find({ _user: req.user.id });
      res.status(200).send(posts)
    } catch (e) {
      res.sendStatus(404);
    }
  });

  app.post('/api/posts', (req, res) => {
    console.log(req.body);
  });
}
