import React, { Component } from 'react';
import './menu.css';

export default class Menu extends Component {
    render() {
        const {Icon}=this.props
        return (
            <div className='container'>
                <Icon className='icon'/>
                <h2 className='title'>{this.props.title}</h2>
            </div>
        )
    }
}
