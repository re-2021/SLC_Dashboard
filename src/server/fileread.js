const fs = require('fs');
const folder1 = './finalproject/I1/';
const folder2 = './finalproject/I2/';

calc = () =>{
    oActors = [];
    oConst = [];
    oGoals = [];
    nActors = [];
    nConst = [];
    nGoals = [];
    fs.readdirSync(folder1).forEach(file => {
        oActors.push(file);
        fs.readdirSync(folder1+file).forEach(f=>{
            var path = folder1+file+'/'+f;
            var data = fs.readFileSync(path,'utf-8');
            var arr = data.split('\n');
            if(f=='Constraints.txt'){
                oConst = oConst.concat(arr);
            }
            else{
                oGoals = oGoals.concat(arr);
            }
        })
    })
    fs.readdirSync(folder2).forEach(file => {
        nActors.push(file);
        fs.readdirSync(folder2+file).forEach(f=>{
            var path = folder2+file+'/'+f;
            var data = fs.readFileSync(path,'utf-8');
            var arr = data.split('\n');
            if(f=='Constraints.txt'){
                nConst = nConst.concat(arr);
            }
            else{
                nGoals = nGoals.concat(arr);
            }
        })
    })
    // actors
    totalActors = nActors.length;
    oldActors = oActors.length;
    dActors = oActors.filter(val => !nActors.includes(val));
    delActors = dActors.length;
    diffActors = oldActors-delActors;
    newActors = totalActors-diffActors;
    upActors = newActors+delActors;
    console.log('---Actors---');
    console.log('Total: ',totalActors);
    console.log('Deleted: ',delActors);
    console.log('New: ',newActors);
    console.log('Updated: ',upActors);

    // constraints
    totalConst = nConst.length;
    oldConst = oConst.length;
    dConst = oConst.filter(val => !nConst.includes(val));
    delConst = dConst.length;
    diffConst = oldConst-delConst;
    newConst = totalConst-diffConst;
    upConst = newConst+delConst;
    console.log('---Constraints---');
    console.log('Total: ',totalConst);
    console.log('Deleted: ',delConst); 
    console.log('New: ',newConst);
    console.log('Updated: ',upConst);

    // goals
    totalGoals = nGoals.length;
    oldGoals = oGoals.length;
    dGoals = oGoals.filter(val => !nGoals.includes(val));
    delGoals = dGoals.length;
    diffGoals = oldGoals-delGoals;
    newGoals = totalGoals-diffGoals;
    upGoals = newGoals+delGoals;
    console.log('---Goals---');
    console.log('Total: ',totalGoals);
    console.log('Deleted: ',delGoals);
    console.log('New: ',newGoals);
    console.log('Updated: ',upGoals);

    return [totalConst,newConst,delConst,upConst,totalGoals,newGoals,delGoals,upGoals,totalActors,newActors,delActors,upActors];
    
}


module.exports = {
    calc,
};
