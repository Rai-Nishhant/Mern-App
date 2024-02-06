const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace("<password>",process.env.PASSWD);

mongoose
  .connect(DB)
  .then(() => {
    console.log(`DB connection successful`);
  })
  .catch((err) => console.log(err));

