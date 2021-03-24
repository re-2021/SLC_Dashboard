const fs = require('fs');
const readline = require('readline');
const folder = './finalproject/I1/';
actors = 0;
goals = [];
constraints=[];
fs.readdirSync(folder).forEach(file => {
    actors = actors+1;
    fs.readdirSync(folder+file).forEach(f=>{
        var path = folder+file+'/'+f;
        var data = fs.readFileSync(path,'utf-8');
        var arr = data.split('\n');
        if(f=='Constraints.txt'){
            constraints = constraints.concat(arr);
        }
        else{
            goals = goals.concat(arr);
        }
    });
    
});

console.log(actors);
console.log(constraints.length);
console.log(goals.length);
