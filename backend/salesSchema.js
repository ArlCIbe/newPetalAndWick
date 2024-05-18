const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const saleSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'CustomerRecord' },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    total: Number,
    date: { type: Date, default: Date.now }
  }, { collection: 'customer_records' }); 
  
  
  const Sale = mongoose.model('Sale', saleSchema);
  const saleArray = [ new Sale({name: 'tulip', description:'tulip',img_url:"nully null null", price: 100, type:"null"}),
                      new Sale({name:"rose",description:'rose',img_url:"null",price:200, type:"null"})
                ]

       async function connect() {
                    try {
                        await mongoose.connect(Connection_String);
                        console.log('Connected to MongoDB');
                        await Sale.insertMany(saleArray);
                    } catch (err) {
                        console.error('Error connecting to MongoDB:', err);
                    }
                }
                
                connect();
                
 module.exports = Sale;