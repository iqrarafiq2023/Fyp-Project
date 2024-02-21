import mongoose from "mongoose";
import { User } from "./models/userSchema.js";
const mongoURI = "mongodb+srv://iqrarafiq680:1Te2u2tm8yyGO56T@cluster0.wgqgubs.mongodb.net/?retryWrites=true&w=majority";


async function setup() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo URI:', process.env.MONGO_URI);
    // Check if admin user already exists
    const existingAdmin = await User.findOne({ role: 'Admin' });

    if (!existingAdmin) {
      // Create admin user if not found
      const adminUser = new User({
        name: 'Admin',
        email: 'admin@mail.com',
        phone: 1234567890,
        password: 'adminpassword',
        role: 'Admin',
      });

      await adminUser.save();
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }

    // Close the MongoDB connection
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error during setup:', error);
  }
}

// Run the setup function
setup();
