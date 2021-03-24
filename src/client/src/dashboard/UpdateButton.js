import React, { Component } from "react";
import { Redirect} from "react-router-dom";
import axios from "axios";

class Update extends Component {
    state = {
        redirect: false,
        isLoading: false,
        isError: false
      } 
      setRedirect = async () => {
        await axios.get(`http://localhost:8081/up`)
            .then(response => {
              if (response.status== 201) {
                console.log('update')
                // const users =  response.data
                // this.setState({ users, isLoading: false })
                this.setState({redirect: true})
                // this.props.parent(users)
                this.props.datag()
              } else {
                this.setState({ isError: true, isLoading: false })
              }
            })
        // this.setState({
        //   redirect: true,
          
        // },
        
        // )
        
      }

      render(){
        return(
            <div>
              <button onClick={()=>{this.setRedirect()}} class="btn btn-primary">Update Dashboard✔️</button>
            </div>
        )
      }
}
export default Update;