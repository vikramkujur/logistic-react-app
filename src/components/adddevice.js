import { useState } from "react";
import axios from "axios";

export default function AddDevice(){

    const [DeviceType , setDeviceType] = useState('');
    const [Model_no , setModel_no] = useState('');
    const [Serial_no , setSerial_no] = useState('');
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [device,setdevice] = useState('');

    const add_device =(e) =>{
        e.preventDefault();
        setError(true);
        console.log("clicked add device button");
        if (DeviceType === "" || Model_no === "" || Serial_no === ""){
            console.log("empty field");
        }
        else{
            setSubmitted(false)
            setSpinner(true)
            axios.post("http://localhost/api_logistic/index.php",{
                device_type:DeviceType,
                model_no: Model_no,
                serial_no: Serial_no,
                task: "add_device",
            }).then((response) =>{
                
                console.log(response.data)
                setSubmitted(true)
                setSpinner(false)
                setDeviceType("")
                setModel_no("")
                setSerial_no("")
                
            }).catch((error1) =>{
                console.log(error1);
            })
        }
    }

    const handleDevice =(e) =>{
        const val = e.target.value
        setDeviceType(val);
        if (val === "Switch"){
            console.log("Switch");
            setdevice("Switch")
            device_List();
        }
        if (val === "Router"){
            console.log("Router");
        }
        if (val === "Ups"){
            console.log("UPS");
        }
        if (val === "Battery"){
            console.log("Battery");
        }
    }

    const device_List =() =>{
        
        
    }

    const handleDeviceModel =(e) =>{
        setModel_no(e.target.value);

    }

    const handleSerialNo = (e) =>{
        setSerial_no(e.target.value);

    }

    const showError =() =>{
       
        return(
            <h1>Rahul</h1>
        );
    }

    return(
        <div className=" bg-white col-lg-12 " style={{padding:60}}>
            <h5>Add Device</h5>
            <div className="border-top my-3"></div>
            <form>
            <div className="row g-3 align-items-center ">
                <div className="col-lg-6 ">
                    <label for="inputPassword" className="col-form-label">Select Device</label>
                    {showError}
                </div>
                <div className="col-lg-6">
                    <select id="_device_type" className=" col-sm" aria-label=" Default select example" onChange={handleDevice}  >
                        <option selected>SELECT DEVICE TYPE </option>
                        <option value="Battery">ATM Switch</option>
                        <option value="Battery">Analyzer</option>
                        <option value="Battery">Chasis</option>
                        <option value="Battery">Computer</option>
                        <option value="Battery">Firewall</option>
                        <option value="Battery">Gateway</option>
                        <option value="Battery">Hub</option>
                        <option value="Battery">IP Phone</option>
                        <option value="Battery">Load Balancer</option>
                        <option value="Battery">Network Appliance</option>
                        <option value="Battery">Other</option>
                        <option value="Battery">Power Supply</option>
                        <option value="Battery">Printer</option>
                        <option value="Router" >Router</option>
                        <option value="Battery">Server</option>
                        <option value="Switch">Switch</option>
                        <option value="Battery">Switch-Router</option>
                        <option value="Battery">Voice Gateway</option>
                        <option value="Battery">Wireless Access Point</option>
                        <option value="Battery">Workstation</option>
                        <option value="Ups">UPS</option>
                        <option value="Battery">Battery</option>
                    </select>
                </div>
                <div className="col-lg-6">
                    <label for="inputPassword6" className="col-form-label">Model No. </label>
                </div>
                <div className="col-lg-6">
                <select id="_device_model" className=" col-sm" aria-label=" Default select example" onChange={handleDeviceModel} >
                    <option selected>SELECT MODEL</option>
                    <option value="EX3300" >EX3300</option>
                    <option value="EX4300">EX4300</option>
                    <option value="EX8300">Ex8300</option>
                </select>
                </div>
                <div className="col-lg-6">
                    <label for="inputPassword6" className="col-form-label">Serial No.</label>
                </div>
                <div className="col-lg-6">
                    <input  type="text" autoComplete="off" aut placeholder="ENTER SERIAL NO" id="_serial_no" className="col-auto" aria-labelledby="passwordHelpInline" onChange={handleSerialNo}></input>
                </div>
                <div className="col--lg-6">
                    <span id="passwordHelpInline" className="form-text">
                    Must be 10 characters long.
                    </span>
                </div>
                <div className="col-lg-6">
                    <button type="submit" className="btn btn-success from-control" onClick={add_device} style={{display : submitted ? '' : 'none'}}> ADD DEVICE</button>
                    <div className="spinner-border" role="status"style={{display : spinner ? '' : 'none'}}>
                        <span className="sr-only"></span>
                    </div>
                    <button className="btn btn-success" type="button" disabled style={{display : spinner ? '' : 'none'}}>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                    </button>
                </div>
            </div>
            </form>
        </div>
    );
}