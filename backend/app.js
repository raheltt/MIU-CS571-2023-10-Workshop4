import { useNavigation, useRoute } from '@react-navigation/native';
const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
//const bycrpt = require("bcrypt");
//const jwt = require("jsonwebtoken");

//const PRIVATE_KEY = "team1";
const COLLECTION_NAME = "restaurants";

let collection = null;

async function connectDB() {
  try {
    const client = new MongoClient(
      //mongodb://localhost:27017
      "mongodb+srv://rteklu:test@cluster0.s8juunh.mongodb.net/"

     // "mongodb://localhost:27017"
    );
    await client.connect();
    db = client.db("RestaurantManagement");
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
}

//middleware
app.use(express.json());
app.use(cors());

connectDB();


//CRUD for Courses
app.put('/departments/:dcode/courses', async(req, res) =>{
try {
  const course = req.body;
  course._id = new ObjectId();
  const ret = await collection.updateOne({code: req.params.dcode},
    
    {
      $push: {courses: course}
    }

    );
  res.send({success: true, data: ret});
} catch (error) {
res.send({success: false, error: "DB error"})}

});

app.get("/departments/:dcode/courses", async(req, res) =>{
  try {
    const ret = await collection.findOne({code: req.params.dcode});
    res.send({success: true, data: ret.courses? ret.courses: []})
  } catch (error) {
    res.send({success: false, error: "DB error"})
  }
})


app.patch('/departments/:dcode/courses/:ccode', async(req, res) =>{
  try {
    const course = req.body;
    const ret = await collection.updateOne(
      {code: req.params.dcode, "courses.code": req.params.ccode},
      
      {
        $$set: {"courses.$": course}
      }
  
      );
    res.send({success: true, data: ret});
  } catch (error) {
  res.send({success: false, error: "DB error"})}
  
  });
  
app.delete("/departments/:dcode/courses/:ccode", async (req, res) =>{
  try {
    const ret = await collection.updateOne(
      {code: req.params.dcode},
      {
        $pull: {"courses": {"code": req.params.ccode}}
      }
    );
    res.send({success: true, data: ret});
    
  } catch (error) {
    res.send({success: false, error: "DB error" });
    
  }
})

//CRUD for reviews






































//CRUD for reviews