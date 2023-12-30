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

const seeFlightTeam = async (req, res) => {
  try {
    const team = await FlightsModel.aggregate([
      {
        $lookup: {
          from: "team",
          let: {
            flightTeam: "$name",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$$flightTeam", ["$name"]],
                },
              },
            },
          ],
          as: "teamFound",
        },
      },
    ]);
    res.json(team);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const seeFlightPassangers = async (req, res) => {
  try {
    const passengers = await FlightsModel.aggregate([
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
    res.json(passengers);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const flight = async (req, res) => {
  const { number } = req.params;
  const flight = await FlightsModel.findOne({ number });
  try {
    const resultado = await flight.aggregate([
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
          as: "passengersFind",
        },
      },
    ]);
    res.json(resultado);
    res.json(flight);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { getFlights, seeFlightPassangers, seeFlightTeam, flight };
