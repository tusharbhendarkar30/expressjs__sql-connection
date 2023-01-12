import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
  <div class="mb-3">
    <label for="id1" class="form-label">Employee ID</label>
    <input type="number" class="form-control" id="id1" aria-describedby="id"/>
    
  </div>
  <div class="mb-3">
    <label for="id2" class="form-label">Employee Name</label>
    <input type="text" class="form-control" id="id2"/>
  </div>
  <div class="mb-3">
    <label for="id3" class="form-label">Employee Salary</label>
    <input type="number" class="form-control" id="id3"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form
