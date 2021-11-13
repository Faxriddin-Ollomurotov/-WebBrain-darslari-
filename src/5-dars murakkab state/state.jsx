import React, { Component } from 'react'

export default class State extends Component {
    
        state={
        name:'',
        surname:'',
        }
    render() {
        const onChange=(e)=>{
            this.setState({[e.target.name]:e.target.value});
        }
        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <h1>Surname:{this.state.surname}</h1>
                <input name={'name'} onChange={onChange} type="text" placeholder="name" />
                <input name={'surname'} onChange={onChange} type="text" placeholder="surname" />
            </div>
        )
    }
}
