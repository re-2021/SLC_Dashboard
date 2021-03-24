import React, {Component} from 'react';
import '../App.css';
import { Redirect} from "react-router-dom";
import {Bar} from 'react-chartjs-2';
import axios from 'axios';  

class Subc extends Component{
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
  countN = (iterL) => {
    let a = []
    for(let i=0; i<=iterL; i++){
      a.push('rgba(233, 92, 32,0.6)')
    }
    return a
}
 
countNb = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(239, 41, 0, 0.74)')
  }
  return a
}
 
countR = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(0, 189, 46, 0.41)')
  }
  return a
}
 
countRb = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(3, 192, 12, 0.77)')
  }
  return a
}
 
countU = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('rgba(79, 44, 29,0.56)')
  }
  return a
}
 
countUb = (iterL) => {
  let a = []
  for(let i=0; i<=iterL; i++){
    a.push('#654321')
  }
  return a
}

    componentDidMount() {   
      axios.get(`http://localhost:8081/data`)  
              .then(res => {  
                      console.log(res);  
                      const cga = res.data;  
                      let iter = [];  
                      let cnw = []; 
                      let crm = []; 
                      let cup = [];
                     
                      cga.forEach(record => {  
                              iter.push(record.iter);  
                              cup.push(record.uconst);
                              cnw.push(record.nconst);
                              crm.push(record.dconst)
                      });  
                      this.setState({  
                              Data: {  
                                      labels: iter,
                                      datasets: [  
                                        {  
                                                label: 'New',  
                                                
                                                data: cnw,  
                                                backgroundColor: this.countN(iter.length),

                                                borderColor: this.countNb(iter.length),
                                                borderWidth: 1

                                              
                                        },
                                        
                                        {  
                                          label: 'Removed',  
                                          data: crm, 
                                          backgroundColor: this.countR(iter.length),
                                          
                                          borderColor: this.countRb(iter.length),
                                          borderWidth: 1
                                          
                                        },
                                        
                                        {  
                                          label: 'Updated',  
                                          data: cup,  
                                          backgroundColor: this.countU(iter.length),

                                          borderColor: this.countUb(iter.length),
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
    legendPosition: 'bottom',
    
  }

  render(){
    return (
     
      <div className="chart" style={{width: '400px'}}>
        <Bar
          data={this.state.Data}
          options={{
            scales:{
              yAxes:[{stacked: true, scaleLabel: {display: true, labelString: 'SL Props'}}],
              xAxes:[{stacked: true, }],
              
            },

            title:{
              display:this.props.displayTitle,
              
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    
      
    
      
    )
  }
}

export default Subc;
