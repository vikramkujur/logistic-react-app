import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Order(){
    const [users, setUsers] = useState([])

    const getData =() => {
        axios.post("http://localhost/api_logistic/index.php",{
            task: "SHOW_DISPATCH",
        }).then((response) =>{
            console.log(response.data)
            setUsers(response.data)

        })
    }
    useEffect(() => {
        getData()
      }, [])


    const DispatchDevice =(e) =>{
        console.log("dispatch clicked"+ e.target.value)
    }

    return(
        <div className="col-lg-12 small">
            {/* //HEADER FILE FOR ORDERS */}
            <div className="col-lg-12">
                <p className="help-text" style={{fontFamily:"square peg"}}>DISPATCHED DEVICE LIST</p>
            </div>

            {/* TABLE TO SHOW LIST OF DEVICES DISPATCHED */}
            <div className="col-lg-12 small">
                {/* TABLE CONTENT SHOWS HERE */}
                {/* <a>dispatched device list shows here with all information of device received , received by whom and where</a> */}
                <table className="table table-bordered small">
                <thead>
                    <tr>
                    <th>Device Type</th>
                    <th>Model No</th>
                    <th>Serial No</th>
                    <th><a>District</a></th>
                    <th><a>Site Name</a></th>
                    <th><a>Site Type</a></th>
                    <th><a>Track</a></th>
                    <th><a>Status</a></th>
                    </tr>
                </thead>
                <tbody>

                {users.map(user =>(
                    <tr>
                        
                        <td>{user.device_type}</td>
                        <td>{user.model_no}</td>
                        <td>{user.serial_no}</td>
                        <td>{user.dispatch_district}</td>
                        <td>{user.dispatch_site_name}</td>
                        <td>{user.dispatch_site_type}</td>
                        <td><a href="#"><button className="btn  btn-sm small" onClick={DispatchDevice} value={user.DEVICE_ID}>Track Order</button></a></td>
                        <td>{}Undelivered</td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
            </div>
        </div>
    )

}