// init.js

// Switch to the database
db = db.getSiblingDB('b-hunters');

// Create a new collection
db.createCollection("domains");
db.createCollection("scans");
db.createCollection("js");
db.createCollection("links");
db.createCollection("reports");
