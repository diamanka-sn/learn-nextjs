"use client"

import Logo from "@/components/Header/Logo"
import Menu from "@/components/Header/Menu"

export default function Header(props:any){
    return (<header>
        {props.name}
        {props.age}
        {props.isMen ? "is a man":"is a woman"}
        <Logo/>
        <div>Header item</div>
        <Menu/>
    </header>)
}