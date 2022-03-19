import React from 'react';
import RegistrationForm from './RegistrationForm';

const CreateUser = () => {
  return (
      <div>

<button type="button" className="btn btn-primary mt-2 float-end mr-3 m-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
  CreateUser
</button>

<div className="modal fade" id="exampleModal" tableindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{width:'134%',position:'relative',left:'-85px'}}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">RegistrationForm</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <RegistrationForm/>
      </div>
      
    </div>
  </div>
</div>
</div>
  )
}

export default CreateUser;