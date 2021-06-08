import React from 'react';
import { Formik } from 'formik';

class FormikDemo extends React.Component{
    constructor(){
        super()
    }
    initialValues={
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        courses:"react"
    }
    validate = (values) => {
        var errors={}
        if(values.firstName == ""){
            errors.firstName = "Required"
        }
        if(values.lastName == ""){
            errors.lastName = "Required"
        }
        if(values.email == ""){
            errors.email = "Required"
        }
        if(values.gender == ""){
            errors.gender = "Required"
        }
        return errors;
    }
    handleSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    render(){
        return(
            <Formik
                initialValues={this.initialValues}
                validate={this.validate}
                onSubmit={this.handleSubmit}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>FirstName : </label>
                            <input type="text" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur}></input> <br/> 
                            {errors.firstName}
                        </div> <br/> 
                        <div>
                            <label>LastName : </label>
                            <input type="text" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur}></input> <br/> 
                            {errors.lastName}
                        </div> <br/> 
                        <div>
                            <label>Email : </label>
                            <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}></input> <br/> 
                            {errors.email}
                        </div> <br/> 
                        <div>
                            <label> Gender</label>
                            <input type="radio" name="gender" value="male" onClick={handleChange} onBlur={handleBlur}/> Male
                            <input type="radio" name="gender" value="female" onClick={handleChange} onBlur={handleBlur}/> Female <br/> 
                            {errors.gender} 
                        </div> <br/> 
                        <div> 
                        <label>Courses</label>
                        <select name="courses" value={values.courses} onChange={handleChange} onBlur={handleBlur}>
                            <option>React</option>
                            <option>Angular</option>
                            <option>Node</option>
                        </select>
                        </div> <br/>
                        <button type="submit">Submit</button>
                        <button type="button">Reset</button>
                    </form>
                    </div>
                )}
                </Formik>     
        )
    }
}

export default FormikDemo;