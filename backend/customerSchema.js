const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const customerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    number:{
        type: Number
    },
    email:{
        type: String
    }
});

const Customer = mongoose.model('Customer', {customerSchema} )

const customerArray = [  new Customer({ name: 'John Doe', email: 'null@gmail.com', phone: '1234567890' }),
new Customer({ name: 'Jane Doe', email: 'null', phone: '0987654321' })
]

async function connect() {
    try {
        await mongoose.connect(Connection_String);
        console.log('Connected to MongoDB');
        await Customer.insertMany(customerArray);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connect();

module.exports = Customer;    
