require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Bracelet = require('./Bracelets.js');

async function seedBracelets() {
  console.log('seeding bracelets...');
  
  await Bracelet.create({ title: 'ReaRea', description: 'Red & Gray.', img:'https://images.unsplash.com/photo-1632670549453-7a3dfac254a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', inStock:true });
  
  await Bracelet.create({ title: 'Yolunda', description: 'Yellow & Gray', img:'https://images.unsplash.com/photo-1632670549453-7a3dfac254a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', inStock:false });

  
  
  console.log('done seeding!');
  
  mongoose.disconnect();
}

seedBracelets();