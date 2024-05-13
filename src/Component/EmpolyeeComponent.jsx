import React, { useState,useEffect} from "react";
import { useNavigate,useParams} from "react-router-dom";
import { createEmpolyee, getEmpolyee, updateEmpolyee } from "../Axios/listEmpolyee";

const EmpolyeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const {id} =useParams();

  const saveEmpolyee = (e) => {
    e.preventDefault();
    if (formValidation()) {
      const emp = {firstName, lastName, email };
      if(id){
         updateEmpolyee(id,emp).then((response=>console.log(response.data))).catch(error=>console.log(error));
         navigate("/empolyees");
      }
      else{
      createEmpolyee(emp).then((response) => console.log(response.data)).catch(error=>console.log(error));
      navigate("/empolyees");
      console.log(formValidation())
      }
    }

  };

  const [error, setError] = useState({
    firstName:"",
    lastName: "",
    email: "",
  });

  function formValidation() {
    let valid = true;
    const errorCopy = {...error};
    
    if (firstName.trim()) {
      errorCopy.firstName =""; 
    } else {
      errorCopy.firstName ="First Name is Required";
      valid=false;
      console.log(firstName.length)
    }

    if (lastName.trim()) {
      errorCopy.lastName = " ";
    } else {
      errorCopy.lastName = "Last Name is Required";
      valid=false;
    }

    if (email.trim()) {
      errorCopy.email = " ";
    } else {
      errorCopy.email = "email is Required";
      valid=false;
    }

    setError(errorCopy);

    return valid;
  }

  const HomePage = () => {
    navigate("/empolyees");
  };
  
  const pageTitle=()=>{
      if(id){
         return <h2 className="text-center">Update Empolyee</h2>
      }
      else{
       return <h2 className="text-center">Add Empolyee</h2>
      }
  }

  useEffect(()=>{
    if(id){
      getEmpolyee(id).then(response=>{
         setFirstName(response.data.firstName);
         setLastName(response.data.lastName);
         setEmail(response.data.email);
     })}
  },[])
  return (
    <div className="container mt-5">
      <button className="btn btn-secondary" onClick={HomePage}>
        Main
      </button>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
   
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${error.firstName?'is-invalid':''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${error.lastName?'is-invalid':''}`}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  className={`form-control ${error.email?'is-invalid':''}`}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {error.email && <div className='invalid-feedback'>{error.email}</div>}
              </div>

              <button className="btn btn-success" onClick={saveEmpolyee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpolyeeComponent;
