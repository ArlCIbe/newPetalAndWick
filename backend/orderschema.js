const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const Customer = require('./customerSchema');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    img_url: {
        type: String
    },
    price: {
        type: Number
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: Customer
    }
    
});

const Order = mongoose.model('Order', orderSchema);

const orderArray = [new Order({ name: 'tulip', description: 'tulip', img_url: "nully null null", price: 100 }),
new Order({ name: "rose", description: 'rose', img_url: "null", price: 200 })
]

async function connect() {
    await mongoose.connect(Connection_String)
        .then(() => console.log('Connected to MongoDB'),
            Order.insertMany(orderArray))
        .catch(err => console.error('Error connecting to MongoDB:', err));
}

connect();



module.exports = Order;