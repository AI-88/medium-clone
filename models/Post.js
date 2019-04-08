const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  coordinates: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  timeAdded: Number
});

mongoose.model('Post', postSchema);
