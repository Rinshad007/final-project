const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://monurinu0:rinshad779@rinshad.w9lqqys.mongodb.net/test?retryWrites=true&w=majority&appName=Rinshad",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
