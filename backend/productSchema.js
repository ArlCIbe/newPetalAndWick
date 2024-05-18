const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image_url: String,
    color: String,
    type: String 
}, { collection: 'products' });

const Product = mongoose.model('Product', productSchema);

const productArray = [ new Product({name: 'tulip', description:'tulip',img_url:"nully null null", price: 100, type:"null"}),
                      new Product({name:"rose",description:'rose',img_url:"null",price:200, type:"null"})
                ]

       async function connect() {
                    try {
                        await mongoose.connect(Connection_String);
                        console.log('Connected to MongoDB');
                        await Product.insertMany(productArray);
                    } catch (err) {
                        console.error('Error connecting to MongoDB:', err);
                    }
                }
                
                connect();
                
 module.exports = Product;