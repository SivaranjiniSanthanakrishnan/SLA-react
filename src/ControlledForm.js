import React from 'react';

class ControlledForm extends React.Component {
    constructor(){
        super()
        this.state={
            firstName : "",
            lastName: "",
            email: "",
            gender: "",
            courses:"react",
            error:{
                firstName : "",
                lastName: "",
                email:"",
                gender:""
            }
        }
    }
    handleChange = (e) => {
        var error = {...this.state.error}
        if(e.target.value === ""){
            error[e.target.name] = "Required"
        } else{
            error[e.target.name] = ""
        }
        this.setState({error,[e.target.name] : e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var err = Object.keys(this.state).filter(key=>{
            if(this.state[key] == "" && this.state[key] != "errors"){
                return key
            }
        })
        if (err.length>0) {
            alert("Please fill all fields");
        }else {
            alert(JSON.stringify(this.state))
        }
    }
    render(){
        return(
            <> 
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <label>First Name: * </label>
                        <input type="text" name="firstName" value={this.state.firstName} maxLength={10} onChange={(e) => this.handleChange(e)} /> <br/>
                        <span style={{'color': 'red'}}>{this.state.error.firstName}</span>
                    </div> <br />
                    <div>
                        <label>Last Name: * </label>
                        <input type="text" name="lastName" value={this.state.lastName} maxLength={10} onChange={(e) => this.handleChange(e)}/> <br />
                        <span style={{'color': 'red'}}>{this.state.error.lastName}</span>
                    </div><br />
                    <div>
                        <label>Email: * </label>
                        <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)}/> <br />
                        <span style={{'color': 'red'}}> {this.state.error.email} </span>
                    </div><br />
                    <div>
                        <label>Gender: * </label>
                        <input type="radio" name="gender" value="male" onChange={(e) => this.handleChange(e)}/> Male
                        <input type="radio" name="gender" value="female" onChange={(e) => this.handleChange(e)}/> Female <br />
                        <span style={{'color': 'red'}}> {this.state.error.gender} </span>
                    </div><br />
                    <div>
                        <label>Courses: </label>
                        <select name="courses" onChange={(e) => this.handleChange(e)} value={this.state.courses} >
                            <option>React</option>
                            <option>Angular</option>
                            <option>Node</option>
                        </select>
                    </div> <br />
                    <button type="submit">Submit</button>
                    <button type="button">Reset</button>
                </form>
            </>
        )
    }
}

export default ControlledForm;