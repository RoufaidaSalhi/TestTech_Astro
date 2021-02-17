import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import axios from 'axios'
import logo from '../../../assets/img/logo.png'
import './Signin.css';
import AuthService from '../../../services/auth.service'

class SignIN extends Component{
  
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
      message:''
    }
    this.changeEmail=this.changeEmail.bind(this)
    this.changePassword=this.changePassword.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    this.redirect=this.redirect.bind(this)
  }
redirect(){
  this.props.history.push('/SignUP')
}

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  onSubmit(event){

    event.preventDefault()

    const login={
      email:this.state.email,
      password:this.state.password,
    }
    axios.post('http://localhost:4000/app/signin',login)
        .then(response=>{
    
          if (response.status=='200'){
            this.props.history.push("/ListWish");        
            this.setState({message: response})
           }
           else {
            this.setState({message: response})

           }
          this.setState({
            email:'',
            password:'',
          })
        });
   
      }
   
  render(){
    const {message}= this.state
    return(
      <div className="Container">
        <div className="test">
        <img src={logo} className="logo" alt="logo" />
        <div className='container'>
          <div className='form-div'>
            <form className="form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="label">Email</label>
                    <br></br>
                    <input type='email' 
                    onChange={this.changeEmail} 
                    value={this.state.email} 
                    className="form-control form-groupe"
                    width="400px"/>
              </div>
              <div className="form-group">
                    <label className="label">Password</label>
                    <br></br>
                    <input type='password'  
                    onChange={this.changePassword} 
                    value={this.state.password} 
                    className="form-control form-group"/>
              </div>
              <div className="form-group">
              <input type='submit' className='button' value='SignIn'/>
              <a type="button" className="btn btn-link" onClick={this.redirect}>SignUP</a>
              </div>
            </form>
          </div>
          <div>   <p>{message}</p></div>
       

        </div>

      </div>
      </div>
    );
  }

}
export default SignIN
