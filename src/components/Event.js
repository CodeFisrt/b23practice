import React, { useState } from "react";

const Event = () => {
    let firstName = "Chetan";

    const [courseName, setCourseName] = useState("Angular");

    const chnageCourName = () => {
        setCourseName("React js")
    }
    function chnageFirstName() {
        firstName = "Ankit";
    }
    function showAlert() {
        alert('Message from Normal Func')
    }
    const showPopup = () => {
        alert('Message from Arrow Func')
    }
    const showMessage = (message) => {
        alert(message)
    }
    function cityChnaged() {
        alert("City Changed")
    }

    return (
        <div>
            <div className="row">
                <div className="col-2">
                    {firstName} - {courseName}
                </div>
                <div className="col-5">
                    <button className="btn btn-primary" onClick={chnageFirstName}>
                        Chnage Name
                    </button>
                    <button className="btn btn-primary" onClick={chnageCourName}>
                        Chnage Course Name
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <button className="btn btn-primary" onClick={showAlert}> Show Alert </button>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary"  onClick={() => { showPopup()}} >Show popup </button>
                </div>
                <div className="col-2">
                    <button  className="btn btn-primary"  onClick={() => {showMessage("Test 1111")}} >
                        show Test 1
                    </button>
                </div>
                <div className="col-2">
                    <button  className="btn btn-primary"   onClick={() => {  showMessage("Test 222");  }} >
                        Show Test 2
                    </button>
                </div>
                <div className="col-2">
                    <select className="form-select" onChange={cityChnaged}>
                        <option>Mah</option>
                        <option>Goa</option>
                        <option>MP</option>
                        <option>GJ</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Event;
