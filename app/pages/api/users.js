import mongoose from 'mongoose';

// MongoDB connection URI
const uri = "mongodb+srv://tatebraeckel:SetAflame!0!2@fixitforward-cluster1.zsx6s.mongodb.net/FixItForwardUsers?retryWrites=true&w=majority&appName=FixItForward-cluster1";

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create the User model if it doesn't already exist
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Function to connect to MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}

// Handler function for API requests
export default async function handler(req, res) {
  await connectToDatabase();

  const { method } = req;

  switch (method) {
    // GET request to retrieve all users
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

    // PUT request to update an existing user by ID
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

    // DELETE request to remove a user by ID
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
