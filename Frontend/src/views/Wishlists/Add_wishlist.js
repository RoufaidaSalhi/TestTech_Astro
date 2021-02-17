import React, {Component} from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CLabel,
  CInput
} from '@coreui/react'
import wishlistsService from '../../services/wishlists.service';
class Modal extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
  
        const post = this.state.input;
  
    wishlistsService.AddWishList(post)
        .then(res => {
          console.log('res');
          console.log(res);
          console.log(res.data);
  
          let input = {};
          input["name"] = "";
          this.setState({input:input});

          alert('Post created successfully.');
  
        })
   
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name wishlist.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
}

  render() {
    if (!this.props.show) {
        return null;

    };
  return (
  
            <CModal show={this.props.show}
              onClose={!this.props.show}
            >  
              <CModalHeader closeButton>
                <CModalTitle>Add wishlist</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CFormGroup >
                <CLabel htmlFor="inputIsValid">Name</CLabel><br/>
                 <input className="text-center mr-auto ml-auto" id="inputIsValid" name="name" 
                 value={this.state.input.name}
                 onChange={this.handleChange}/>
              
              
              <div className="text-danger">{this.state.errors.name}</div>
              </CFormGroup>

              </CModalBody>
              <CModalFooter>
                <CButton 
                  color="secondary" 
                  onClick={!this.props.show}>Cancel</CButton>
                    <CButton color="primary" onClick={this.handleSubmit}>Done</CButton>{' '}
              </CModalFooter>
            </CModal>
  );
}

}
export default Modal