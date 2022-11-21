import React from 'react'

function Table_entry() {
  return (
    <div className="row">
    <div className="col-lg-2"></div>
      <div className="col-lg-10">
        <h2 className="content-title">Table Entry</h2>

<div class="table-responsive">
    <table class="table table-bordered">
      
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Type</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td> <input type="name" className="form-control" id="name" placeholder="Enter Name" name="name" /></td>
          <td> 
        <select name="Select Option" className="form-control" >
        <option value="Select Option" >Select Option</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
        <option value="multiselect">Multiselect</option>
        </select>
        </td>
         
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default Table_entry