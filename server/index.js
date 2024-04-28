const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/brands", (req, res) => {
  res.json([
    { id: 0, name: "Facebook" },
    { id: 1, name: "Google" },
    { id: 2, name: "Apple" },
    { id: 3, name: "BitVoid" },
  ]);
});

app.get("/datum1", (req, res) => {
  console.log("req", req.port);
  res.json([
    {
      year: 2005,
      income: 23.5,
      expenses: 18.1,
      id: 0,
    },
    {
      year: 2006,
      income: 26.2,
      expenses: 22.8,
      id: 1,
    },
    {
      year: 2007,
      income: 30.1,
      expenses: 23.9,
      id: 2,
    },
    {
      year: 2008,
      income: 29.5,
      expenses: 25.1,
      id: 3,
    },
    {
      year: 2009,
      income: 24.6,
      expenses: 24.6,
      id: 4,
    },
  ]);
});

app.get("/datum2", (req, res) => {
  res.json([
    {
      year: 2005,
      income: 33.5,
      expenses: 38.1,
      id: 0,
    },
    {
      year: 2006,
      income: 26.2,
      expenses: 22.8,
      id: 1,
    },
    {
      year: 2007,
      income: 24.1,
      expenses: 17.9,
      id: 2,
    },
    {
      year: 2008,
      income: 23.5,
      expenses: 27.1,
      id: 3,
    },
    {
      year: 2009,
      income: 28.6,
      expenses: 24.3,
      id: 4,
    },
  ]);
});

const port = 3002;
app.listen(port, () => console.log(`Listening at port: ${port}`));
