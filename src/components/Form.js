import React,{useState} from 'react';


const Form = () => {
    
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
 
    const formSubmit = (event) =>{
        event.preventDefault();
        alert('submit form');
    }

    const inputFirstEvent = (event) => {
       console.log(event.target.value);
       setFirstname(event.target.value);
    }

    const inputLastEvent = (event) => {
        console.log(event.target.value);
        setLastname(event.target.value);
     }
      // const name = event.target.name;
       //const value = event.target.value;
    //    setFullname((preValue)=> {
    //        console.log(obj);
    //          if(name=='fname'){
                
    //             return {
    //                 fname : value,
    //                 lname: preValue.lname,
    //             }
    //          }
    //          if(name=='lname'){
                
    //             return {
    //                 fname : preValue.fname,
    //                 lname: value,
    //             }
    //          }
    //    })
       
    

    return (
        <>
        <div className="row">
        <form id="formId" onSubmit={formSubmit}>
            <h5>{firstname} {lastname}</h5>
            <div className="col-offset-5 col-md-6 col-sm-10">
                <div className="input-group mb-3">
                    <input type="text" name="firstName"  onChange={inputFirstEvent}  className="form-control" placeholder="First Name" />
                </div>
            </div>
            <div className="col-offset-6 col-md-6 col-sm-10">
                <div className="input-group mb-3">
                    <input type="text" name="lastName" onChange={inputLastEvent} className="form-control" placeholder="Last Name"  />
                </div>
            </div>
            <button type="submit">Send</button>
            </form>
        </div>
        
        </>
    );
}
export default Form;