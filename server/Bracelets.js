// Here, we will include the schema for the braclets database

const mongoose = require('mongoose'); // pulling in mongoose

// const bookSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     status: { type: String, uppercase: true, enum: ['LIFE-CHANGING', 'FAVORITE FIVE', 'RECOMMENDED TO ME'] },
//   });
  
//   const bookModel = mongoose.model('book', bookSchema);
  
//   module.exports = bookModel;

const BraceletSchema = new mongoose.Schema({
    name: String,
    description: String,
    img:String,
    inStock:Boolean,

})

const braceletModel = mongoose.model('bracelet', BraceletSchema);

module.exports = braceletModel;