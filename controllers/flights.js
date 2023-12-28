const FlightsModel = require("../models/Flights.js");

//Get all passengers
const getFlights = async (req, res) => {
  try {
    const result = await FlightsModel.find({});
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//
// //
// const seeFlight = async (req, res) => {
//   const { number } = req.body;
//   const F = await FlightsModel.findOne({ number });
//   res.json(F);
// };
//

const seeFlight = async (req, res) => {
  try {
    const resultado = await FlightsModel.aggrega([
      {
        $lookup: {
          from: "passengers",
          let: {
            flightName: "$number",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$$flightName", "$number"],
                },
              },
            },
          ],
          as: "passengersFind",
        },
      },
    ]);
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// const flight = async (req, res) => {
//   const { number } = req.body;
//   const flight = await FlightsModel.findOne({ number });
//   const resultado = await flight.aggregate([
//     {
//       $lookup: {
//         from: "passengers",
//       },
//     },
//   ]);
// };

module.exports = { getFlights, seeFlight };
