import React,{useEffect,useState} from 'react';


function ContactForm(props) {
const initFieldValues = {
    fullName : '',
    mobile:'',
    email:'',
    address:''
}
var [values,setValues] = useState(initFieldValues);

const handleInputChange = (e) => {
        var {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
})

}

useEffect(() => {
    if(props.currentId === '')
    setValues({
        ...initFieldValues
    })
    else
    setValues({
        ...props.contactObjects[props.currentId]
    })


},[props.currentId])

const handleFormSubmit = (e) =>{
    e.preventDefault();
    props.addOrEdit(values);
}

    return (
        <>
          <form autoComplete="off"  onSubmit={handleFormSubmit}>
                <div className="form-group input-group" >
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                        <input className="form-control" placeholder="Full Name" name="fullName"
                         value={values.fullName}
                         onChange={handleInputChange}/>
                    </div>
                  
                </div>
            
                <div className="row">
                    
                        <div className="form-group input-group col-md-6" >
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile}  onChange={handleInputChange}     />
                            </div>
                        
                        </div>
                        <div className="form-group input-group col-md-6" >
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <input className="form-control" placeholder="Email" name="email" value={values.email}   onChange={handleInputChange}    />
                            </div>
                        
                        </div>

                </div>
                
                <div className="form-group" >
                    <textarea className="form-control" name="address" placeholder="Address" 
                    value={values.address} onChange={handleInputChange}
                    ></textarea>

                </div>
                <div className="form-group">
                    <input type="submit"  value={props.currentId == ''?"Save":"Update"} className="btn btn-primary btn-block"/>
                </div>
          </form>
        </>
    )
}

export default ContactForm
