const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ENV_URI_DATABASE;;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 1000,
    family: 4,
    authSource: 'admin',
    bufferCommands: false,
    autoIndex: false,
    maxPoolSize: 10,
    minPoolSize: 5,
};

const connection = mongoose.createConnection(uri, options);

connection.on('connected', () => console.log('connected'));
connection.on('open', () => console.log('open'));
connection.on('disconnected', () => console.log('disconnected'));
connection.on('reconnected', () => console.log('reconnected'));
connection.on('disconnecting', () => console.log('disconnecting'));
connection.on('close', () => console.log('close'));

connection.on('error', (err) => {
    console.error('connection error:', err);
});


async function connect() {
    try {
        await connection.asPromise();
        console.log('Mongoose is connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = connect;