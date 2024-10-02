import mongoose from 'mongoose';
import connectToDatabase from '../../lib/db';

// Define a simple User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default async function handler(req, res) {
  await connectToDatabase();

  const { method } = req;

  switch (method) {
    // GET request to retrieve users
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to fetch users' });
      }
      break;

    // POST request to create a new user
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to create user' });
      }
      break;

    // PUT request to update a user by ID
    case 'PUT':
      try {
        const { id } = req.query;
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to update user' });
      }
      break;

    // DELETE request to delete a user by ID
    case 'DELETE':
      try {
        const { id } = req.query;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: deletedUser });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to delete user' });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
