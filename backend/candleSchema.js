const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const candleSchema = new mongoose.Schema({
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

const Candle = mongoose.model('Candle', {candleSchema} )



const candleArray = [ new Candle({name: 'tulip', description:'tulip',img_url:"nully null null", price: 100}),
                      new Candle({name:"rose",description:'rose',img_url:"null",price:200})
                ]
    
    async function connect() {
        await mongoose.connect(Connection_String)
         .then(() => console.log('Connected to MongoDB'),
        Candle.insertMany(candleArray))
         .catch(err => console.error('Error connecting to MongoDB:', err));
    }

    connect();





module.exports = Candle;
