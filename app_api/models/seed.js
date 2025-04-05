const { connect, connection } = require('./db');
const Trip = require('./travlr');
const fs = require('fs');

// Read seed data from file
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const seedDB = async () => {
    try {
        await connect();

        console.log('Deleting old trips..');
        await Trip.deleteMany({});

        console.log('Inserting new trips');
        await Trip.insertMany(trips);

        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Seeding error:', err);
    } finally {
        await connection.close();
        console.log('MongoDB connection closed');
        process.exit(0);
    }
};

seedDB();