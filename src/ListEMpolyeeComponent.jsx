import React,{useState,useEffect} from "react";
import { deleteEmpolyee, listEmpolyee } from "./Axios/listEmpolyee";
import { useNavigate } from "react-router-dom";
const ListEMpolyeeComponent = () => {
 const [empolyee,setEmpolyee]=useState([]);

 useEffect(()=>{
      listAllEmpolyee();
 },[])

 const listAllEmpolyee=()=>{
  listEmpolyee().then(response=>setEmpolyee(response.data)).catch((error)=>console.log(error))
 }
 const navigate=useNavigate();

 const navigating=()=>{
     navigate("/add-empolyee")
 }

 const updateEmpolyee=(id)=>{
     navigate(`/edit-empolyee/${id}`);
 }

 const removeEmpolyee=(id)=>{
    deleteEmpolyee(id).then((response)=>{
      listEmpolyee().then(response=>setEmpolyee(response.data)).catch((error)=>console.log(error))
  })
 }
  return (
    <div className='container'>
      <h1 className='text-center mb-5 py-5'>List of Empolyees</h1>
      <div className='d-flex mb-2'>
      <input type="text" className='col-md-3 mr-3'></input>
      <button className='btn btn-success'>Search</button>
    
      </div>
      <button className="btn btn-primary mb-3 px-5" onClick={navigating}>Add</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {empolyee.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                 <button className='btn btn-info' onClick={()=>updateEmpolyee(emp.id)}>Update</button>
                 <button className='btn btn-danger mx-3' onClick={()=>removeEmpolyee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEMpolyeeComponent;
