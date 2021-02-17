import React,{Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import AddProduct from './Add_product'
import {
 
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CImg,
    CCol,
    CForm,
    CInput,
    CMediaBody,
    CMedia,
    CRow,
    CNav,
    CSelect,
    CLabel,
    CNavLink,
    CDataTable

  } from '@coreui/react'
import ProductsService from '../../services/Products.service';

class Products extends Component{
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.setActiveProducts= this.setActiveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.ShowHide = this.ShowHide.bind(this);

    this.state = { 
      ListData: {},
      ProductDescription:{},
      currentProduct:null,
      currentIndex:0,
      show: false
    };
}

componentDidMount() {
  this.retrieveProducts();
}
ShowHide(){
    this.setState({show: !this.state.show})
}
refreshList() {
  this.retrieveProducts();
  this.setState({
    currentProduct: null,
    currentIndex: 0
  });
}
 
retrieveProducts() {
  ProductsService.GetAllPrducts()
    .then(response => {
      this.setState({
        ListData: response.data
      });
      console.log(JSON.stringify(response.data))
    })
    .catch(e => {
      console.log(e);
    });
}
refreshList() {
  this.retrieveProducts();
  this.setState({
    currentProduct: null,
    currentIndex: 0
  });
}
setActiveProducts(prod, index) {
    console.log(prod)
    ProductsService.GetProduct(prod)
    .then(response => {
      this.setState({
        ProductDescription: response.data
      });
      console.log(response.data)
    })
    .catch(e => {
      console.log(e);
    });
  this.setState({
    currentProduct: prod,
    currentIndex: index
  });
}
render(){
    const {ListData , currentIndex ,ProductDescription} = this.state;

        return(
            <>
      <CRow>
      <CCol xs="3">
          <CCard>
            <CCardHeader>
            <CCol col="2" className="text-center mt-3">
            <CButton block shape="pill" color="light" size="lg" onClick={this.ShowHide}><CIcon name="cil-plus" size={'xl'} />&nbsp;&nbsp;Add Product</CButton></CCol>
            </CCardHeader>
            <CCardBody>
              <CNav vertical>
              { 
              Object.keys(ListData).map((prod, index) => (
                <CNavLink  className={"nav-item"+"  "+(index === currentIndex ? "active" : "")}   onClick={() => this.setActiveProducts(prod, index)} key={index}>  {prod}</CNavLink> ))}
              </CNav>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol>
                {/* <AddProduct show={this.state.show}></AddProduct>  */}
                {Object.keys(ProductDescription).map((item, index) => (
          <CCard>
             
        
          <div className="mt-3"><CButton size="sm" className={'card-header-actions  btn-vk btn-brand mr-1 mb-1'} color="light" ><CIcon size="lg" name="cil-pencil"></CIcon>&nbsp;&nbsp;<span className="mfs-2" >Edit</span> </CButton>
                    </div>
              <div>
              <CButton size="sm" className={' card-header-actions  btn-vk btn-brand mr-1 mb-1 mt-2'} color="danger" ><CIcon size="lg" name="cil-trash"></CIcon>&nbsp;<span className="mfs-2" >Delete</span> </CButton>
              </div>
              <div >
              
                           

                  <CCol>
              <CMedia>
      <CImg src="https://picsum.photos/1024/480/?image=54" 
    width="400"
    height="200"
    fluid
    className="mb-2 mt-2 ml-3"/>
      <CMediaBody className="ml-3">
        <h5 className="mt-2">{ProductDescription[item].title}</h5>
        <p>
            
         {item.description}
        </p>
        <p className="mt-5">
         price : <span>{ProductDescription[item].price}</span>
        </p>
      </CMediaBody>
    </CMedia>
    <CCol md="3" className="mt-3">

                    <CLabel htmlFor="select">Wishlist :</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CSelect custom name="select" id="select">
                      <option value="0">{ProductDescription[item].name_wishlist}</option>
                     
                    </CSelect>
                    
                  </CCol>
                  <CCol md="3" className="mt-3">
                    <CLabel htmlFor="select">Status :</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CSelect custom name="select" id="select">
                      <option value="0">{ProductDescription[item].status}</option>
                     
                    </CSelect>
                  </CCol>
                  </CCol>
              
              </div>
             
            
                

            <CCardBody>
              <CRow>
             
      
      
         
                  </CRow>
                  </CCardBody>
                  </CCard>  ))}
                 </CCol> 
                


      </CRow>
    </>
            
        )
    }
}
export default Products