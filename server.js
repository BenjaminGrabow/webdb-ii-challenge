const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

const getAllCars = () => {

  return db('cars');
};

const getCarById = (id) => {
  return db('cars').where({ id });
};

const createNewCar = ( car ) => {
  return db('cars').insert( car );
};

const updateCarById = ({ VIN, make, model, mileage }, id) => {
  return db('cars').where({ id }).update({ VIN, make, model, mileage });
};

const deleteCarById = (id) => {
  return db('cars').where({ id }).del();
};

server.get('/cars', async (req, res) => {
  try {
    const cars = await db('cars');
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the cars' });
  }
});

server.get("/cars/:id", async (req, res) => {
  const getCar = await getCarById(req.params.id);
  try {
    if (getCar) {
      res.status(200).json(getCar);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

server.post("/cars", async (req, res) => {
  const arrayOfId = await createNewCar(req.body);
  const arrayOfCar = await getCarById(arrayOfId[0]);
  try {
    if (arrayOfId) {
      res.json(arrayOfCar[0]);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

server.put("/cars/:id", async (req, res) => {
  const { VIN, make, model, mileage } = req.body;
  const result = await updateCarById({ VIN, make, model, mileage }, req.params.id);
  try {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

server.delete('/cars/:id', async (req, res) => {
  const deleteCar = await deleteCarById(req.params.id);
  try {
    if (deleteCar) {
      res.status(200).json(deleteCar);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

// server.post('/', async (req, res) => {
//   try {
//     const [id] = await db('shouts').insert(req.body);
//     const shouts = await db('shouts');

//     res.status(201).json(shouts);
//   } catch (error) {
//     console.error('\nERROR', error);
//     res.status(500).json({ error: 'Cannot add the shout' });
//   }
// });

module.exports = server;
