import React from "react";
import Menu from "../components/Menu/Menu";

export default function MainLayout ({children}) {
    return (
        <div>
            
            <Menu/>

                <div>{children}</div>
            
        </div>
    )
} 