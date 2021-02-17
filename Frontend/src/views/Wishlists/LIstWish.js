import React,{Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import './List.css';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CBadge,
    CRow,
    CNav,
    CNavbar,
    CNavLink,
    CDataTable

  } from '@coreui/react'
import Modal from './Add_wishlist'
import wishlistsService from '../../services/wishlists.service';
const getBadge = status => {
  switch (status) {
    case 'tobuy': return 'success'
    case 'bought': return 'secondary'
  }
}
const fields = ['Image', 'name', 'Description', 'status', 'Price']
class ListWish extends Component{
  constructor(props) {
    super(props);
    this.retrievewishlists = this.retrievewishlists.bind(this);
    this.setActivewishlist = this.setActivewishlist.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.ListProductBought=this.ListProductBought.bind(this)
    this.state = { show : false,
      WishProducts:{},
      ListData: {},
      currentwishlist:null,
      currentIndex:0,
    }; 
}

toggleModal() {
  this.setState({ show: !this.state.show })
}
componentDidMount() {
  this.retrievewishlists();
}
refreshList() {
  this.retrievewishlists();
  this.setState({
    currentwishlist: null,
    currentIndex: 0
  });
}
 
retrievewishlists() {
  wishlistsService.GetWishlist()
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
ListProductBought(){
  wishlistsService.GetProductWishBought(this.state.currentwishlist)
  .then(response => {
    this.setState({
      WishProducts: response.data
    });
    console.log(JSON.stringify(response.data))
  })
  .catch(e => {
    console.log(e);
  });
}
setActivewishlist(wish, index) {
  wishlistsService.GetProductWishTObuy(wish)
  .then(response => {
    this.setState({
      WishProducts: response.data
    });
    console.log(JSON.stringify(response.data))
  })
  .catch(e => {
    console.log(e);
  });
  wishlistsService.GetProductWishBought(wish)
  .then(response => {
    this.setState({
      WishProducts: response.data
    });
    console.log(JSON.stringify(response.data))
  })
  .catch(e => {
    console.log(e);
  });
  this.setState({
    currentwishlist: wish,
    currentIndex: index,
  });
}
render(){
    const {ListData , WishProducts,currentIndex ,currentwishlist} = this.state;

        return(
            <>
      <CRow>
      <CCol xs="3">
          <CCard>
            <CCardHeader>
            <CCol col="2" className="text-center mt-3">
            <CButton block shape="pill" color="light" size="lg"  onClick={this.toggleModal.bind(this)} ><CIcon name="cil-plus" size={'xl'} />&nbsp;&nbsp;Add Wishlist</CButton></CCol>
            <Modal show={this.state.show} toggleModal={this.toggleModal}/>
            </CCardHeader>
            <CCardBody>
              <CNav vertical>
              { 
              Object.keys(ListData).map((wish, index) => (
                <CNavLink className={"nav-item"+"  "+(index === currentIndex ? "active" : "")}   onClick={() => this.setActivewishlist(wish, index)} key={index}>  {wish}</CNavLink>))}
              </CNav>
            </CCardBody>
          </CCard>
        </CCol> 
        <CCol>
          <CCard>
            <CCardHeader>
            {currentwishlist}
             <div className="card-header-actions">
             <CButton size="sm" className={'float-right btn-vk btn-brand mr-1 mb-1'} color="light" ><CIcon size="lg" name="cil-trash"></CIcon>&nbsp;<span className="mfs-2">Delete</span> </CButton>

               <CButton size="sm" className={'float-right btn-vk btn-brand mr-1 mb-1'} color="light" ><CIcon size="lg" name="cil-pencil"></CIcon>&nbsp;<span className="mfs-2">Edit</span> </CButton>

             </div>
            </CCardHeader> 
            <CCardBody>
              <CRow>
             
              
        <CCol >

              <CNavbar light color="light" className="shadow-sm">
                <CNav  variant="tabs" >
                <CNavLink onChange={this.setActivewishlist}>To Buy</CNavLink>
                <CNavLink  onChange={this.ListProductBought}>Brought</CNavLink>
               </CNav>
                <div className="card-header-actions">
                <CButton color="light" className="my-2 my-sm-0" > <CIcon name="cil-grid"></CIcon>&nbsp;Grid</CButton>
                <CButton color="light" className="my-2 my-sm-0" > <CIcon name="cil-list"></CIcon>&nbsp;List</CButton>

                </div>



              </CNavbar>
             
        </CCol>
      
         
                  </CRow>

                  <CRow className="mt-5">
                    <CCol>
                    <table className="table table-lg responsive striped bordered hover"  >
  <thead>
    <tr>
      <th>Image</th>
      <th>name</th>
      <th>Description</th>
      <th>Status</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
  { Object.keys(WishProducts).map((item,index)=>(
    <tr>
      <td></td>
      <td>{WishProducts[item].name}</td>
      <td>{WishProducts[item].description}</td>
      <td>  <CBadge color={getBadge(WishProducts[item].status)}>
                        {WishProducts[item].status}
                      </CBadge></td>
      <td>{WishProducts[item].price}</td>

    </tr>
 ))}
  </tbody>
</table>
               {/* <CDataTable items={''}
              fields={fields}
              size="lg"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(WishProductsTObuy[item].status)}>
                        {WishProductsTObuy[item].status}
                      </CBadge>
                    </td>),

              }}
              
            ></CDataTable>  */}
                    </CCol>
                 
                  </CRow>
                  </CCardBody>
                  </CCard>
                 </CCol> 
              
      </CRow>
    </>
            
        )
    }
}
export default ListWish