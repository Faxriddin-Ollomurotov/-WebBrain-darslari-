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
    render() {
        return (
            <div>
                {SidebarData.map(({id, icon, title})=><Menu id={id} Icon={icon} title={title}/>)};
            </div>
        )
    }
}
