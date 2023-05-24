import React from "react";
import Menu from "../components/Menu/Menu";
import NavVertical from "../components/NavVertical/NavVertical";

export default function MainLayout ({children}) {
    return (
        <div>
            <Menu>
                <div>{children}</div>
            </Menu>
            <NavVertical>
                <div>{children}</div>
            </NavVertical>
        </div>
    )
} 