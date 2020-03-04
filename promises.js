// Suppose an asynchronous function f can be called as shown below. If f returns a promise, how can we rewrite this code to get the same effect?
//   f('hello', function(error, result) {
//     if (error) console.error(error.stack);
//     console.log(result);
//   }); 

mongoose.connection.dropDatabase()
  .then(() => harcourt.save())
  .then(() => torrey.save())
  .then(() => lee.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
  promise. 
    then(function () { 
        console.log('Success, You are a GEEK'); 
    }). 
    catch(function () { 
        console.log('Some error has occured'); 
    }); 

  var promise = new Promise(function(resolve, reject){
    //do something
});

f.then(()=> console.log(result))