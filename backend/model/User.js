const mongoose = require('mongoose');

// Define the schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export the model
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

