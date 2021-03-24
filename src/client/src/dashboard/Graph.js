import React, {Component} from 'react';
import '../App.css';
import { Redirect} from "react-router-dom";
import {Bar} from 'react-chartjs-2';
import axios from 'axios';  
import Subc from './Subc';
import Subg from './Subg';
import Suba from './Suba';

class MyChart extends Component{
  constructor(props){
    super(props);
    this.state = { Data: {} };  
  }

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  countC = (iterL) => {
    let a = []
    for(let i=0; i<=iterL; i++){
      a.push('rgba(246, 80, 88,0.6)')
    }
    return a
}

countCb = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(253, 22, 165, 0.79)')
  }
  return a
}

countG = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(251, 222, 68,0.56)')
  }
  return a
}

countGb = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(203, 231, 0, 0.88)')
  }
  return a
}

countA = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(40, 51, 74,0.56)')
  }
  return a
}

countAb = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(0, 0, 0, 0.42)')
  }
  return a
}

    componentDidMount() {   
      axios.get(`http://localhost:8081/data`)  
              .then(res => {  
                      console.log(res);  
                      const cga = res.data;  
                      let iter = [];  
                      let ctot = []; 
                      let gtot = []; 
                      let atot = [];  
                      cga.forEach(record => {  
                              iter.push(record.iter);  
                              ctot.push(record.tconst);  
                              gtot.push(record.tgoals);
                              atot.push(record.tactors);
                      });  
                      this.setState({  
                              Data: {  
                                      labels: iter ,  
                                      datasets: [  
                                        {  
                                                label: 'SL Props',  
                                                data: ctot,  
                                                backgroundColor: this.countC(iter.length),

                                                borderColor: this.countCb(iter.length),
                                                borderWidth: 1

                                              
                                        },
                                        
                                        {  
                                          label: 'Goals',  
                                          data: gtot, 
                                          backgroundColor: this.countG(iter.length),
                                          
                                          borderColor: this.countGb(iter.length),
                                          borderWidth: 1
                                          
                                        },
                                        
                                        {  
                                          label: 'Actors',  
                                          data: atot,  
                                          backgroundColor: this.countA(iter.length),

                                          borderColor: this.countAb(iter.length),
                                          borderWidth: 1
                                        }       
                                ]

                              }  
                      });  
            })  
     
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition: 'right',
    
  }

  render(){
    return (
      <div className="App">
      <div class="topnav">
      <h2 style={{textAlign:'center'}}>Graphical Representation</h2>


      </div>
    
      <div class="container">
          
            <div class="row">
            {/*<div  style={{width: '900px', paddingLeft:'0%'}}>*/}
                  <div  class="col-8" style={{paddingTop:'7%', paddingBottom:'7%'}}>
                    <Bar
                          data={this.state.Data}
                          options={{
                            scales:{
                              yAxes:[{stacked: true}],
                              xAxes:[{stacked: true, scaleLabel: {display: true, labelString: 'Iteration'}}]
                            },

                            title:{
                              display:this.props.displayTitle,
                              
                              fontSize:30
                            },
                            legend:{
                              display:this.props.displayLegend,
                              position:this.props.legendPosition
                            }
                          }}
                        />
                        <br />
                        <br />
                        <div className='wrapper'>
          {this.renderRedirect()}
          <button onClick={this.setRedirect} class="btn btn-primary" >Tabular View</button>
        </div>
                  </div>
                  
              
              <div class="col-3">
              {/*<div class="row">*/}
              <div class="col-6 col-md-3" ><Subc /></div>
              <div class="col-6 col-md-3" ><Subg /></div>
              <div class="col-6 col-md-3" ><Suba /></div>
             
              </div>
          </div>
       </div>

        

        
    </div>
      
    )
  }
}

export default MyChart;
