import { useState } from "react";
import axios from "axios";
import { Form } from "react-router-dom"

export default function Dispatch(){

    // all variables
    const [dev_model, setDev_model] = useState([])
    const [site_Loc, setSite_Loc] = useState([])
    const [dev_id, setdev_id] = useState([])
    const district_list = ['RANCHI' , 'BOKARO' , 'DUMKA' , 'GODDA' ,'EAST SINGHBHUM' ,
                     'WEST SINGHBHUM' , 'GUMLA' , 'LOHARDAGA' , 'SIMDEGA' , 'RAMGARH' , 'HAZARIBAGH' , 'KODERMA' ,
                     'DHANBAD' , 'PAKUR' ,'CHATRA' , 'DEOGHAR', 'GARHWA' , 'GIRIDIH' , 'JAMTARA' , 'KHUNTI' , 'LATEHAR' ,
                      'PALAMU' , 'SAHIBGANJ' , 'SARAIKELA']
    const [DeviceType , setDeviceType] = useState('');
    const [Model_no , setModel_no] = useState('');
    const [Serial_no , setSerial_no] = useState('');
    const [DEVICE_ID , setDEVICE_ID] = useState('');
    const [DISPATCH_DISTRICT , setDISPATCH_DISTRICT] = useState('');
    const [DISPATCH_SITE_TYPE , setDISPATCH_SITE_TYPE] = useState('');
    const [DISPATCH_SITE_NAME , setDISPATCH_SITE_NAME] = useState('');
    const [DISPATCH_LOCATION , setDISPATCH_LOCATION] = useState('');
    const [ADDRESS , setADDRESS] = useState('');
    const [DATE_TIME , setDATE_TIME] = useState('');

    const [Site , setSite] = useState('')
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [device,setdevice] = useState('');
    const [ida,setid] = useState('')
    const [ser,setser] = useState('')
    //HANDLE EVENT
    const add_device =(e) =>{
        e.preventDefault();
        setError(true);
        
        if (DEVICE_ID === "" || DISPATCH_DISTRICT === "" || DISPATCH_SITE_TYPE === "" || DISPATCH_LOCATION === "" ){
            console.log("PLEASE ENTER ALL THE REQUIRED FIELDS");
        }
        else{
            setSubmitted(false)
            setSpinner(true)
            axios.post("http://localhost/api_logistic/index.php",{
                device_id: DEVICE_ID,
                date_time: DATE_TIME,
                dispatch_district: DISPATCH_DISTRICT,
                dispatch_site_type: DISPATCH_SITE_TYPE,
                dispatch_site_name: Model_no,
                dispatch_location: DISPATCH_LOCATION,
                address: ida,
                status: "Order Dispatched",
                task: "dispatch_device",
            }).then((response) =>{
                console.log(response.data)
                setSubmitted(true)
                setSpinner(false)
            }).catch((error1) =>{
                console.log(error1);
            })
        }
    }

    const handleDeviceType =(e) =>{
        e.preventDefault()
        const val = e.target.value
        setDeviceType(val);
        axios.post("http://localhost/api_logistic/index.php",{
                device_type: val,
                task: "GET_MODEL",
            }).then((response) =>{
                console.log(response.data)
                setSubmitted(true)
                setSpinner(false)
                setDev_model(response.data)
            }).catch((error1) =>{
                console.log(error1);
            })
    }


    const handleSiteType = (e)=>{
        
        setDISPATCH_SITE_TYPE(e.target.value)
        console.log(DISPATCH_DISTRICT)
        console.log(e.target.value)
        axios.post("http://localhost/api_logistic/index.php",{
                
                district: DISPATCH_DISTRICT,
                site_type: e.target.value,
                task: "GET_SITE",

            }).then((response) =>{
                
                console.log(response.data)
                setSubmitted(true)
                setSpinner(false)
                setSite_Loc(response.data)
                
                
            }).catch((error1) =>{
                console.log(error1);
                
            })
    }

    const handleDeviceModel =(e) =>{
        e.preventDefault()
        setModel_no(e.target.value);
    }

    const handleSerialNo = (e) =>{
        e.preventDefault()
        setSerial_no(e.target.value);
        setid(e.target.value);
        const a = e.target.value;
        if (a.length > 0 )
        {
            axios.post("http://localhost/api_logistic/index.php",{
                serial_number: e.target.value,
                task: "GET_DEV_ID",
            }).then((response) =>{
                
                if (response.data != ''){
                    console.log(response.data)
                    setSubmitted(true)
                    setSpinner(false)
                    // setDev_model(response.data)
                    setdev_id(response.data)
                }
                
                
            }).catch((error1) =>{
                console.log(error1);
            })
        }
        else{
            setSerial_no([])
        }
    }

    const handleDistrict = (e) =>{
        
        setDISPATCH_DISTRICT(e.target.value);
    }
    const handleSiteLocation = (e) =>{
        e.preventDefault()
        setDISPATCH_LOCATION(e.target.value)
    }
    const handleDate = (e)=>{
        e.preventDefault()
        setDATE_TIME(e.target.value)
        console.log(e.target.value)
    }
    const showError =() =>{
       
        return(
            <h1>Rahul</h1>
        );
    }
    const setserialvalue=(id) =>{
        id.preventDefault(id)
        
        console.log(id.target.textContent)
        console.log(id.target.value)
        setDEVICE_ID(id.target.value)
        setid(id.target.textContent)
    }

    return(
        <div className="AddDevice container bg-white small col-lg-12" style={{padding:50 , marginTop:0}}>
            <h5>Dispatch</h5>
            <div className="border-top my-3"></div>
            
            <form>
                <div className="row g-3 align-items-center col-lg-12 ">
                    <div className=" col-lg-6 ">
                        <label for="inputPassword6" className="col-form-label">Select Device</label>
                        {showError}
                    </div>
                    <div className=" col-lg-6">
                        <select id="_device_type" className=" row  col-sm-12" aria-label=" Default select example" onChange={handleDeviceType}  >
                            <option >SELECT DEVICE TYPE </option>
                            <option value="Router" >Router</option>
                            <option value="Switch">Switch</option>
                            <option value="Ups">UPS</option>
                            <option value="Battery">Battery</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label for="inputPassword6" className="col-form-label ">Model No. </label>
                    </div>
                    <div className="col-lg-6">
                        <select id="_device_model" className=" col-sm-12" aria-label=" Default select example" onChange={handleDeviceModel} >
                            <option >SELECT MODEL</option>
                            {dev_model.map(user =>(
                                <option value={user.model_no} >{user.model_no}</option>
                                ))}
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label for="inputPassword6" className="col-form-label">DISTRICT</label>
                    </div>
                    <div className="col-lg-6">
                        <select id="_device_model" className=" col-sm-6" aria-label=" Default select example" onChange={handleDistrict} >
                            <option >SELECT DISTRICT</option>
                            {
                                district_list.map(user =>(
                                    <option value={user}>{user}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label for="inputPassword6" className="col-form-label col-sm">SITE TYPE</label>
                    </div>
                    <div className="col-lg-6">
                        <select id="_device_model1" className=" col-auto" aria-label=" Default select example" onChange={handleSiteType} >
                            <option >SITE TYPE</option>
                            <option value="DHQ" >DHQ</option>
                            <option value="SDHQ">SDHQ</option>
                            <option value="BHQ">BHQ</option>
                            <option value="HO_DHQ">HO_DHQ</option>
                            <option value="HO_SDHQ">HO_SDHQ</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label for="inputPassword6" className="col-form-label col-sm">SITE LOCATION</label>
                    </div>
                    <div className="col-lg-6">
                    <select id="_device_model" className=" col-auto" aria-label=" Default select example" onChange={handleSiteLocation}  >
                            <option >SITE LOCATION</option>
                            {site_Loc.map(user =>(
                                <option value={user.site_location} >{user.site_location}</option>
                                ))}
                            
                        </select>
                        <div>
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <label for="inputPassword6" className="col-form-label ">DATE/TIME</label>
                        
                    </div>
                    <div className="col-lg-6">
                        <input type="datetime-local" onChange={handleDate}></input>
                    </div>
                    <div className="col-lg-6">
                        <label for="inputPassword6" className="col-form-label ">SERIAL NO.</label>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="navbar">
                                
                                <li className="nav-item nav-link dropdown">
                                <a className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <input value={ida} autoComplete="off"  type="text" placeholder="ENTER SERIAL NO" id="_serial_no" className="col-lg-12" aria-labelledby="passwordHelpInline" onChange={handleSerialNo}></input>
                                </a>
                                
                                <ul className="dropdown-menu">
                                    {
                                    
                                    dev_id.map(user =>(
                                        <li >
                                            {/* <a className="dropdown-item" value={user.device_id} onClick={setserialvalue}>{user.serial_no}</a> */}
                                            <button className="dropdown-item" value={user.device_id} onClick={setserialvalue}>{user.serial_no}</button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <span id="passwordHelpInline" className="form-text">
                            Must be 10 characters long.
                        </span>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-success from-control" onClick={add_device} style={{display : submitted ? '' : 'none'}}> ADD DEVICE</button>
                        <div className="spinner-border" role="status"style={{display : spinner ? '' : 'none'}}>
                            <span className="sr-only"></span>
                        </div>

                        <button className="btn btn-success" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}