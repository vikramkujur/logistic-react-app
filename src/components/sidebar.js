import { useState } from "react"

export default function Sidebar(){
  const [add_device_bol,set_add_device_bol] = useState(false)

  const add_dev_fun = (e) =>{
    set_add_device_bol(true)
  }

    return(
        <div className="col-lg-12 bg-white " >
            <div className="flex-shrink-1 p-3 bg-white" >
              <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                {/* <svg className="bi me-2" width="30" height="24"></svg> */}
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
                    Add Device
                  </button>
                </li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" >
                    Dispatch Device
                  </button>
                </li>
                <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed" >
                    
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
    )

}