import React from "react";
import Menu from "../components/Menu/Menu";
import NavVertical from "../components/NavVertical/NavVertical";

export default function MainLayout ({children}) {
    return (
        <div>
            
            <Menu/>
            <NavVertical/>
                <div>{children}</div>
            
        </div>
    )
} 