import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import axios from 'axios'
import './add_product.css'
import { CCard, CCardBody, CCardHeader, CCol } from '@coreui/react';

class AddProduct extends Component{

    constructor(){
        super()
        this.state={
          name:'',
          description:'',
          price:'',
          wishlist:'',
          status:'',
          currency:''
        }
        this.changeName=this.changeName.bind(this)
        this.changeDescription=this.changeDescription.bind(this)
        this.changePrice=this.changePrice.bind(this)
        this.changeWishlist=this.changeWishlist.bind(this)
        this.changeStatus=this.changeStatus.bind(this)
        this.changeCurrency=this.changeCurrency.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
      }
      changeName(event){
        this.setState({
          name:event.target.value
        })
      }
      changeDescription(event){
        this.setState({
          description:event.target.value
        })
      }
      changePrice(event){
        this.setState({
          price:event.target.value
        })
      }
      changeWishlist(event){
        this.setState({
          wishlist:event.target.value
        })
      }
      changeStatus(event){
        this.setState({
          status:event.target.value
        })
      }
      changeCurrency(event){
        this.setState({
          currency:event.target.value
        })
      }
      onSubmit(event){
        event.preventDefault()
        const Add={
          name:this.state.name,
          description:this.state.description,
          price:this.state.price,
          wishlist:this.state.wishlist,
          status:this.state.status,
          currency:this.state.currency
        }
        axios.post('http://localhost:4000/app/AddProduct',Add)
            .then(response=>console.log(response.data))
        this.setState({
            name:'',
            description:'',
            price:'',
            wishlist:'',
            status:'',
            currency:''
        })
      }
      render(){
        return(
        <CCol>
        <CCard>
        <CCardHeader></CCardHeader>
        <CCardBody>
          <div className="Container_add">
            <div className="test_add">
            <div className='container'>
              <div className='form-div'>
                <form className="form" onSubmit={this.onSubmit}>
                <div class="row mb-1">
                    <div class="col">
                    <div className="form-group">
                        <label className="label">Name</label>
                        <br></br>
                        <input type='text' 
                        onChange={this.changeName} 
                        value={this.state.name} 
                        className="form-control form-group name"/>
                    </div>
                    </div>
                    <div class="col">
                    <div className="form-group">
                        <label className="label">Price</label>
                        <br></br>
                        <input type='text'  
                        onChange={this.changePrice}
                        value={this.state.price} 
                        className="form-control form-group price"/>
                    </div>
                    </div>
                    <div class="col">
                    <label className="label">Status</label>
                  <br></br>
                  <select className="form-select curency" aria-label="Default select example">
                      <option selected></option>
                      <option value="1">TND</option>
                      <option value="2">EURO</option>
                      <option value="2">USD</option>
                  </select>
                    </div>
                </div>
                <div class="form-row">
                    <div className="form-group">
                        <label className="label">Description</label>
                        <br></br>
                        <textarea type='text' className="form-control desc" rows='3'></textarea>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                    <label className="label">Wishlist</label>
                  <br></br>
                  <select class="form-select" aria-label="Default select example">
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                    </div>
                    <div class="col">
                    <label className="label">Status</label>
                  <br></br>
                  <select className="form-select" aria-label="Default select example">
                      <option selected></option>
                      <option value="1">To Bye</option>
                      <option value="2">Bought</option>
                  </select>
                    </div>
                </div>
                  <br></br>
                  <div className="form-group but">
                  <input type='submit' className='buttonCan' value='Cancel'/>
                  <input type='submit' className='button' value='Done'/>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>  
          </CCardBody>
          </CCard>
          </CCol>
        );
      }

}
export default AddProduct