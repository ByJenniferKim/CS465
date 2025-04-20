const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');
const User = mongoose.model('users'); // Ensure the User model is registered

// Utility function to get authenticated user
const getUser = (req, res, callback) => {
  if (req.payload && req.payload.email) {
    console.log('getUser payload:', req.payload);
    
    User.findOne({ email: req.payload.email })
      .exec()
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        } else {
          callback(req, res, user.name);
        }
      })
      .catch(err => {
        return res.status(404).json(err);
      });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

// GET: /trips - list all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Model.find({}).exec();
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(404).json({ message: 'Trips not found', error: err.message });
  }
};

// GET: /trips/:tripCode - get one trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Model.findOne({ code: req.params.tripCode }).exec();
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(400).json({ message: 'Error finding trip', error: err.message });
  }
};

// POST: /trips - add a new trip (now includes getUser)
const tripsAddTrip = async (req, res) => {
  getUser(req, res, async (req, res) => {
    try {
      const newTrip = await Trip.create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      });
      return res.status(201).json(newTrip);
    } catch (err) {
      return res.status(400).json(err);
    }
  });
};


// PUT: /trips/:tripCode - update a trip (now includes getUser)
const tripsUpdateTrip = async (req, res) => {
  getUser(req, res, async (req, res) => {
    try {
      const updatedTrip = await Trip.findOneAndUpdate(
        { code: req.params.tripCode },
        {
          code: req.body.code,
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description: req.body.description
        },
        { new: true }
      );

      if (!updatedTrip) {
        return res.status(404).json({ message: `Trip not found with code ${req.params.tripCode}` });
      }

      return res.status(200).json(updatedTrip);
    } catch (err) {
      return res.status(500).json({ message: 'Server error', error: err.message });
    }
  });
};


// Export all controllers
module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};
