const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true
  },

  budget: {
    type: String,
    required: true
  },  

  plan: {
    type: String,
    enum: ['Basic', 'Enterprise', 'Osnovni', 'Napredni'],
    required: true
  },  

}, { timestamps: true });

const Messages = mongoose.model('Message', messageSchema);
exports.Messages = Messages;

