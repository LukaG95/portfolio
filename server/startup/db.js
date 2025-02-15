const mongoose = require('mongoose');

module.exports = function () {
    let DB = process.env.DATABASE;

    mongoose.connect(DB, {
        useNewUrlParser: true
    })
      .then(() => console.log(`Connected to database`))
      .catch(err => {
        console.log(err)
      });
};