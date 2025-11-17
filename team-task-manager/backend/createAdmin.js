const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

const createAdmin = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('A12345', salt);

  const admin = new User({
    name: 'Admin',
    email: 'admin@test.com',
    password: hashedPassword,
    role: 'Admin'
  });

  await admin.save();
  console.log('Admin created');
  mongoose.disconnect();
};

createAdmin();
