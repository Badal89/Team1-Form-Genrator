const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const path = require("path");
const authRoutes = require("./routes/auth.routes");
const adminRoutes=require("./routes/admin.routes");
const config=require("./config.json")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

const url = `mongodb+srv://${config.username}:${config.userpassword}@${config.clustername}.1aid6nj.mongodb.net/${config.dbname}?retryWrites=true&w=majority&appName=${config.clustername}`;
mongoose
  .connect(url)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error", err));


app.use(express.static(path.join(__dirname, "../frontend/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/public/index.html"));
});


app.use("/auth", authRoutes);
app.use("/admin",adminRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

