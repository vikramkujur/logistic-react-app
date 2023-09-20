import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Layout from './components/layout';
import Sidebar from './components/sidebar';
import AddDevice from './components/adddevice';
import Dispatch from './components/dispatch';
import Order from './components/orders';
import Trackorder from './components/trackorder';
import Side from './components/side';
import { useState } from 'react';

function App() {
  const [add_device_bol,set_add_device_bol] = useState(false)
  const [dispatch_device_bol,set_dispatch_device_bol] = useState(false)
  const [order_bol,set_order_bol] = useState(false)
  // const [add_device_bol,set_add_device_bol] = useState(false)
  const add_dev_fun = (e) =>{
    set_add_device_bol(true)
    set_dispatch_device_bol(false)
    set_order_bol(false)
  }
  const add_dispatch_dev =()=>{
    set_add_device_bol(false)
    set_dispatch_device_bol(true)
    set_order_bol(false)
  }
  const show_order =()=>{
    set_order_bol(true)
    set_add_device_bol(false)
    set_dispatch_device_bol(false)
  }
  return (
    <div className="container bg-white" style={{padding:0,margin:0}}>
      <div className='row bg-white' >
        <div className="col-12 shadow-sm p-3 mb-5 fixed-top bg-white">
          <Header/>
        </div>
      </div>

      <div className='row bg-light' style={{marginTop:90}}>
          <div className='col-lg-3 rounded shadow-sm bg-white'>
          
          <div className="col-lg-12 bg-white " >
            <div className=" p-3 bg-white" >
              <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                <span className="fs-6 fw-semibold">MENU</span>
              </a>
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                    Home
                  </button>
                  <div className="collapse" id="home-collapse" >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li><a href="/" className="link-dark rounded">Overview</a></li>
                      <li><a href="/" className="link-dark rounded">Updates</a></li>
                      <li><a href="/" className="link-dark rounded">Reports</a></li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    Dashboard
                  </button>
                  <div className="collapse" id="dashboard-collapse" >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li><a href="/" className="link-dark rounded">Overview</a></li>
                      <li><a href="/" className="link-dark rounded">Daily Reports</a></li>
                      <li><a href="/" className="link-dark rounded">Weekly Reports</a></li>
                      <li><a href="/" className="link-dark rounded">Monthly Reports</a></li>
                      <li><a href="/" className="link-dark rounded">Annually Reports</a></li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                    Orders
                  </button>
                  <div className="collapse" id="orders-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li><a href="/" className="link-dark rounded">New</a></li>
                      <li><a href="/" className="link-dark rounded">Processed</a></li>
                      <li><a href="/" className="link-dark rounded">Shipped</a></li>
                      <li><a href="/" className="link-dark rounded">Returned</a></li>
                    </ul>
                  </div>
                </li>
                <li className="border-top my-3"></li>
                
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" onClick={add_dev_fun}>
                    Add New Device
                  </button>
                </li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" onClick={add_dispatch_dev} >
                    Dispatch New Device
                  </button>
                </li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" onClick={show_order}>
                    Orders
                  </button>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                    Account
                  </button>
                  <div className="collapse" id="account-collapse" >
                  <ul className="list-unstyled ps-0 btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li className="mb-1 link-dark rounded">Yourname</li>
                      <li className="mb-1">Profile</li>
                      <li className="mb-1">Logout</li>
                  </ul>
                  </div>
                </li>
              </ul>
            </div>
        </div>
          </div>
          <div className='col-lg-9 rounded shadow-sm bg-white' style={{height:500 , overflow:'auto'} } >
            <div id='add_dev' style={{display : add_device_bol ? '' : 'none'}}>
              <AddDevice/>
            </div>
            <div id='dispatch_dev' className='p-3' style={{display: dispatch_device_bol ? '' : 'none'}}>
              <Dispatch/>
            </div>
            <div id='order' style={{display:order_bol ? '' : 'none'}} >
              <Order/>
            </div>
            <div id='track_order' style={{display:order_bol ? '' : 'none'}}>
              <Trackorder/>
            </div> 
          </div>
      </div>

      <div className='row'>
        <Footer/>
      </div>

    </div>
  );
}

export default App;

