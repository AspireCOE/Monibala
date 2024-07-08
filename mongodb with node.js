const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017/";

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("Employee");

    const cursor = collection.find({});

    // insertOne 
    const ackresult = collection.insertOne({
      _id: 7,
      firstName: "John",
      lastName: "Steves",
      gender: "male",
      email: "john.steves@abc.com",
      salary: 50000,
      department: { name: "Developer" },
    }); 
    await cursor.forEach((record) => {
      console.log(record);
    });
    await client.close();

    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the function to connect
connectToMongoDB();