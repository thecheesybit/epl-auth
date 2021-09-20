import React,{useState} from 'react'
import fire from '../fire'

function Profile() {


    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [uname, setuname] = useState('')
    const [email, setemail] = useState('')
    const [inst, setinst] = useState('')
    const [web, setweb] = useState('')
    const [abt, setabt] = useState('')
    
        const handleSubmit =()=>{


            console.log(fname)
            console.log(lname)
            console.log(uname)
            console.log(email)
            console.log(inst)
            console.log(web)
            console.log(abt)

        }
    


    return (
      <>
        <div>

          <h2>
            Profile Update
          </h2>
          <br/>
         

{/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}

            <div className="input-group mb-3" >
            <span className="input-group-text">First and last name</span>
            <input type="text" aria-label="First name" className="form-control"   onChange={event => setfname(event.target.value)} />
              <input type="text" aria-label="Last name" className="form-control" onChange={event => setlname(event.target.value)}  />
        </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={event => setuname(event.target.value)} />
            </div>

          


     

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="youremail@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2" onChange={event => setemail(event.target.value)}  >email</span>
</div>


<div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Institution</span>
            <input type="text" className="form-control" placeholder="College or School" aria-label="Username" aria-describedby="basic-addon1" onChange={event => setinst(event.target.value)}  />
            </div>

<label for="basic-url" className="form-label">Your Website(optional)</label>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon3">https://example.com/users</span>
  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={event => setweb(event.target.value)}  />
</div>


<div className="input-group">
  <span className="input-group-text">About</span>
  <textarea className="form-control" aria-label="With textarea" onChange={event => setabt(event.target.value)} ></textarea>
</div>


<button type="button" className="btn btn-primary  my-3" onClick={handleSubmit} >Save</button>




        </div>
      
        </>
    )

   
    
}

export default Profile
