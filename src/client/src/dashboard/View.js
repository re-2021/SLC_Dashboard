import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Redirect} from "react-router-dom";
import '../App.css';


class View extends Component {

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

      render(){

return(
<div className="App">
    <div class="topnav">
    <h2 style={{textAlign:'center'}}>Welcome to Dashboard</h2>


    </div>

    < br />

    <div class="row justify-content-around">
    <div class="col-4">
    <div class="dropdown">
    <button class="dropbtn">Select Actor ⬇</button>
    <div class="dropdown-content">
    <a href="#">Doctor</a>
    <a href="#">Patient</a>

    </div>
    </div>

    <form>
    <br/>
    <div class="form-group">
    <label for="exampleFormControlTextarea1"><strong>Actor Specific Goals</strong></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    </form>
    </div>

    {/*-----------------------------------------2nd col--------------------------------------------------*/ }

    <div class="col-4">

    <form>
    <br/>
    <br/>
    <br/>
    
    <div class="form-group">
    <label for="exampleFormControlTextarea1"><strong>Actor Specific Contraints</strong></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    </form>
    </div>
    
    </div>
    <br/>
    <br/>
    <div className='wrapper'>
    {this.renderRedirect()}
    <button onClick={this.setRedirect} class="btn btn-primary" >Go Back to the Tabular Data</button>
    </div>
</div>
);
}
}

export default View;
