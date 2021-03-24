import React, { Component } from "react";
import { Redirect} from "react-router-dom";

class Analytics extends Component {
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
          return <Redirect to='/graphs' />
        }
         
      }

      render(){
        return(
            <div>
                {this.renderRedirect()}
              <button onClick={this.setRedirect} class="btn btn-primary">Graph View 📈</button>
            </div>
        )
      }
}
export default Analytics;