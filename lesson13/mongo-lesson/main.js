"use strict";

const
  MongoDB = require("mongodb").MongoClient,
  dbURL = "mongodb://localhost:27017",
  dbName = "recipe_db";

MongoDB.connect(dbURL, (err, client) => {
  if(err) throw err;

  let db = client.db(dbName);

  db.collection("contacts")
    .find()
    .toArray((err, data) => {
      if (err) throw err;

      console.log(data);
    });

  db.collection("contacts")
    .insert({
      name: "ok",
      email: "ok@example.com"
    }, (err, db) => {
      if (err) throw err;
      console.log(db);
    })
});
