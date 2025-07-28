import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./models/user.models.js";
import { Blog } from "./models/blog.models.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

const seedData = async () => {
  await connectDB();

  // Clear existing data (optional, comment out to append)
  await User.deleteMany({});
  await Blog.deleteMany({});

  // Seed users
  const users = [
    { name: "Tracey Wilson", email: "tracey@example.com", password: "password123" },
    { name: "John Doe", email: "john@example.com", password: "password123" },
    { name: "Jane Smith", email: "jane@example.com", password: "password123" },
    { name: "Alice Brown", email: "alice@example.com", password: "password123" },
  ];

  const createdUsers = await User.insertMany(users);
  console.log("Users created:", createdUsers);

  // Seed blogs
  const blogs = [
    // Existing blogs
    {
      title: "The Future of AI in Modern Life",
      content: "AI is transforming our world with advancements in automation, healthcare, and more. From self-driving cars to personalized recommendations, the possibilities are endless.",
      author: createdUsers[0]._id, // Tracey Wilson
      category: "Technology",
      photo: "https://picsum.photos/800",
    },
    {
      title: "Exploring the Metaverse",
      content: "The metaverse is the next frontier, blending virtual reality with social interaction. Companies are investing billions to create immersive digital worlds.",
      author: createdUsers[1]._id, // John Doe
      category: "Technology",
      photo: "https://picsum.photos/801",
    },
    // New blogs
    {
      title: "Sustainable Living in the Digital Age",
      content: "Technology can help reduce our environmental footprint. Smart homes, renewable energy apps, and sustainable tech are paving the way for a greener future.",
      author: createdUsers[2]._id, // Jane Smith
      category: "Environment",
      photo: "https://picsum.photos/802",
    },
    {
      title: "The Rise of Remote Work",
      content: "Remote work has reshaped the workplace, offering flexibility but also challenges like digital fatigue and collaboration hurdles. Here's how to thrive remotely.",
      author: createdUsers[3]._id, // Alice Brown
      category: "Workplace",
      photo: "https://picsum.photos/803",
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      content: "Blockchain technology is revolutionizing industries beyond finance, from supply chain transparency to secure voting systems.",
      author: createdUsers[0]._id, // Tracey Wilson
      category: "Technology",
      photo: "https://picsum.photos/804",
    },
    {
      title: "Mental Health and Technology",
      content: "Apps and wearables are helping people manage stress, anxiety, and mental health, but screen time overload can have the opposite effect.",
      author: createdUsers[2]._id, // Jane Smith
      category: "Health",
      photo: "https://picsum.photos/805",
    },
    {
      title: "The Future of Education Technology",
      content: "EdTech is transforming classrooms with AI tutors, virtual labs, and personalized learning experiences tailored to individual students.",
      author: createdUsers[1]._id, // John Doe
      category: "Education",
      photo: "https://picsum.photos/806",
    },
  ];

  const createdBlogs = await Blog.insertMany(blogs);
  console.log("Blogs created:", createdBlogs);

  await mongoose.connection.close();
  console.log("Database connection closed");
};

seedData().catch((err) => {
  console.error("Seeding error:", err);
  process.exit(1);
});