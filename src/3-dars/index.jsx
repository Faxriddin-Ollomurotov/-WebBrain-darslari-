import React, { Component } from 'react';
import Menu from './Menu';
import {ReactComponent as person} from "./icons/1824147.svg"

 const SidebarData=[
     {
         id:1,
         icon: person,
         title: "Main"
     },
     {
        id:2,
        icon: person,
        title: "Abaut"
    },
    {
        id:3,
        icon: person,
        title: "Settings"
    },
    {
        id:4,
        icon: person,
        title: "Contact"
    },
    {
        id:5,
        icon: person,
        title: "Test"
    },
 ]


export default class Dars_2 extends Component {
    state={
        active:0,
    }
    render() {
        return (
            <div>
                {SidebarData.map(({id,icon, title})=>{
                    return(
                        <div key={id} onClick={()=>this.setState({active:id})}>
                            <Menu active={this.state.active===id} id={id} Icon={icon} title={title}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
