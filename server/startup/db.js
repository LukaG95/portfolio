const mongoose = require('mongoose');

module.exports = function () {
    /* const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
  ) */
    let DB = process.env.DATABASE;

    mongoose.connect(DB, {
        useNewUrlParser: true
    // useUnifiedTopology: true
    })
      .then(() => console.log(`Connected to database`))
      .catch(err => {
        console.log(err)
      });
};