const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskModel = require("./models/task.model");

const TaskService = require("./services/task.service");
// const upload= require("../config/multerConfig");

const TaskServiceInstance = new TaskService();


  

  const taskRoutes = require("./routes/task.routes");

  
  


const app=express();
const PORT=8082;
// const DB_URI="mongodb://localhost:27017/task-manager"
const DB_URI="mongodb+srv://manojthakur614:test@cluster0.n30qy.mongodb.net/?retryWrites=true&appName=Cluster0/task manager"



mongoose.connect(DB_URI, {
 useNewUrlParser:true,
 useUnifiedTopology:true,
  
})
.then(()=> console.log("DB connected!"))
.catch((error)=> console.log("error is connecting DB", error));

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);


app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}!`);
});