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

const seeFlightPassangers = async (req, res) => {
  const { number } = req.params;
  try {
    const results = await FlightsModel.aggregate([
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
                  $in: ["$$flightName", ["$number"]],
                },
              },
            },
          ],
          as: "passengersFound",
        },
      },
    ]);
    res.json(results.filter((result) => result.number === number));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { getFlights, seeFlightPassangers };
