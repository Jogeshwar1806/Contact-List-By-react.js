import React from 'react';
import { useState } from 'react';


class AddContact extends React.Component{
    state = {
        name:"",
        email:"",
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All The Fields Are mendatory.")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""})
    }
    render(){
        return (
            <div className='main container col-6 bg-primary-subtle rounded mt-3 p-30'>
                <h2>Add Contact</h2>
                <form className="form" onSubmit={this.add}>
                    <div className='form-input mb-3 p-30'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" id='name' className='form-control' placeholder='Name' value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    </div>
                    <div className='form-input mb-3 p-30'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" id='email' className='form-control' placeholder='Email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary' >Add to contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact;