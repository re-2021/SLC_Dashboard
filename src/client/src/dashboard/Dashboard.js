import { render } from "@testing-library/react";
import axios from "axios";
import React, { Component } from "react";
import { Redirect} from "react-router-dom";
import {Link} from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.gif';
import Analytics from './AnalyticsButton';
import Update from './UpdateButton';



class Dashboard extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: false,
      isError: false
    }
  }

 /*-----------------------------------------JSON FETCH/READ DATA---------------------------------- */
  async componentDidMount() {
    this.setState({ isLoading: true })
    this.getData()
}
  getData=async ()=>{
 
  
    await axios.get(`http://localhost:8081/data`)
    .then(response => {
      if (response.status== 200) {
        const users =  response.data
        this.setState({ users, isLoading: false })
        console.log(this)
      } else {
        this.setState({ isError: true, isLoading: false })
      }
    })
  }

  renderTableRows = () => {
    console.log('users',this.state.users)
    return this.state.users.map(user => {
      return (
        <tr key={user.iter} className='bg-info'>
          <th>{user.iter}</th>
          <td>{user.tconst}</td>
          <td>{user.nconst}</td>
          <td>{user.dconst}</td>
          <td>{user.uconst}</td>
          <td>{user.tgoals}</td>
          <td>{user.ngoals}</td>
          <td>{user.dgoals}</td>
          <td>{user.ugoals}</td>
          <td>{user.tactors}</td>
          <td>{user.nactors}</td>
          <td>{user.dactors}</td>
          <td>{user.uactors}</td>
        </tr>
      )
    })
  }
//state for button to redirect to VIEW page
    state = {
        redirect: false,
      }
      setRedirect = () => {
        this.setState({
          redirect: true,
          
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/view' />
        }
         
      }
    
      getnewdata = (data) =>{
        console.log('okay')
        this.setState({users:data})
        
      }
      

    render(){
      const { users, isLoading, isError } = this.state

      if (isLoading) {
        return <div className="App">
                <div  class="topnav"><h2 style={{textAlign:'center'}}>Dashboard</h2></div>
                <div style={{textAlign: 'center'}}><img src={logo} alt='Loading..'></img></div>
              </div>
      }

      if (isError) {
        return <div>Error</div>
      }

    return(

        <div className="App">
        <div class="topnav">
       <h2 style={{textAlign:'center'}}>Dashboard</h2>
       
     </div>

        <br/>

       <div>
           <table class='table table-bordered'>
              <thead>
              <tr className="bg-success">
              <th scope="col" >Iteration</th>
              
              <th scope="col" colspan='4'>SL Props</th>
              <th scope="col" colspan='4'>Goals</th>
              <th scope="col" colspan='4'>Actors</th>

              </tr>
              </thead>

              <tbody>
              <tr className='table-danger'>
        
                  <th scope="row"></th>
                  
                  <td><strong>Total</strong></td>
                  <td><strong>New</strong></td>
                  <td><strong>Removed</strong></td>
                  <td><strong>Updated</strong></td>
                  
                  <td><strong>Total</strong></td>
                  <td><strong>New</strong></td>
                  <td><strong>Removed</strong></td>
                  <td><strong>Updated</strong></td>
                
                  
                  <td><strong>Total</strong></td>
                  <td><strong>New</strong></td>
                  <td><strong>Removed</strong></td>
                  <td><strong>Updated</strong></td>
                
                  
                  
                
                </tr>
                
                {this.renderTableRows()}
                 

              </tbody>
           </table>
           
         </div>
       
         <div class="container h-100">
              <div class="row " style={{paddingLeft: '140px'}}>
                <div class="col">
                <Analytics />
                </div>
                <div class="col order-12" style={{paddingRight: '130px'}}>
                {this.renderRedirect()}
              <button onClick={this.setRedirect} class="btn btn-warning">View Constraints and Goal Model</button>
                </div>
                <div class="col order-1">
                <Update parent={this.getnewdata} datag={this.getData}/>
                </div>
              </div>
              <br/>
        </div>

      
      

      

       </div>
      
    )
}
}

export default Dashboard;

