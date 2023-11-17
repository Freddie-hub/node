const { error } = require('console');
const  fsAsync= require('fs');

fsAsync.readFile('./content/first.txt', 'utf-8', (err, result) => {
  if(err){
    console.log(err)
    return error;
  }
    const first =result;
fsAsync.readFile('./content/second.txt', 'utf-8', (err, result) => {
  if(err){
    console.log(err)
    return error;
  }
    const second =result;
  fsAsync.writeFile(
    './content/result-async.txt',
    `The result is: ${first}, ${second}`,
    (err, result) => {
      if(err){
        console.log(err)
        return error;
      }else{
        console.log(result);
      }
    }
  )
}) 
})

