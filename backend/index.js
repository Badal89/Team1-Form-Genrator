const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


const url = "mongodb+srv://badalrathore922:ir1hWP061TXU8PYQ@valtech.c7tczty.mongodb.net/formDB?retryWrites=true&w=majority&appName=Valtech";
mongoose
  .connect(url)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error", err));


app.use(express.static(path.join(__dirname, "../frontend/public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/public/index.html"));
});


app.use("/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));