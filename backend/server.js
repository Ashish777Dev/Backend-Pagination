const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log(`Database connected succesfully 🟢`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT:${port}`);
});
