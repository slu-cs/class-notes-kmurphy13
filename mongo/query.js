
// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

// What documents are in the collection?
const query = Professor.find();
query.exec(function(error, professors) {
  if (error) console.error(error.stack);
  console.log(professors);
});

const queries = [

    // Sort professors by name
    Professor.find().sort('name'),

    // Reverse sort professors on date started 
    Professor.find().sort('-started'),

    // Find Professors that started in 2003
    Professor.find().where('started').equals(2003),

    // Professors who have taught 362
    Professor.find().where('courses').in(362),

    // What are all the ranks
    Professor.distinct('rank') 
]

queries[0].exec(function(error, professors) {
    if(error) console.error(error.stack);

    const names = professors.map(p => p.name);
    console.log('Names in order: ', names);
});

queries[1].exec(function(error, professors) {
    if(error) console.error(error.stack);
    
    const names = professors.map(p => p.name);
    console.log('Started most recently: ', names);
});

queries[2].exec(function(error, professors) {
    if(error) console.error(error.stack);
    
    const names = professors.map(p => p.name);
    console.log('Started in 2003', names);
});

queries[3].exec(function(error, professors) {
    if(error) console.error(error.stack);
    
    const names = professors.map(p => p.name);
    console.log('Professors who have taught CS362: ', names);
});

queries[4].exec(function(error, professors) {
    if(error) console.error(error.stack);
    
    console.log('Possible ranks: ', professors);
});




