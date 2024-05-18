const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'



const flowerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    img_url:{
        type: String
    },
    price:{
        type: Number
    }
});

const Flower = mongoose.model('Flower', {flowerSchema} )

const flowerArray = [ new Flower({name: 'tulip', description:'tulip',img_url:"nully null null", price: 100}),
                      new Flower({name:"rose",description:'rose',img_url:"null",price:200})
                ]
    
    async function connect() {
        await mongoose.connect(Connection_String)
         .then(() => console.log('Connected to MongoDB'),
        Flower.insertMany(flowerArray))
         .catch(err => console.error('Error connecting to MongoDB:', err));
    }

    connect();



module.exports = Flower;    
