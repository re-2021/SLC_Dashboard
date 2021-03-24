const Pool = require('pg').Pool
const fn = require('./fileread');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database: 'reproject',
    password: '12345',
    port: 5432,
})

const getData = (request, response) => {
    pool.query('SELECT * FROM dashboard', (error, results)=>{
        if (error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createEntry = (request, response)=>{
    var val = fn.calc();
    // console.log(val);
    pool.query('INSERT INTO dashboard (tconst,nconst,dconst,uconst,tgoals,ngoals,dgoals,ugoals,tactors,nactors,dactors,uactors) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', val, (error,results)=>{
                      if(error){
                          throw error;
                      }
                      response.status(201).send(`dashboard updated`);
                  }  );
}
module.exports = {
    getData,
    createEntry,
}