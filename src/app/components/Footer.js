import React, {Component} from "react";

export function Footer(props) {
    return (
        <div>
            <p> Copyrights @{props.year},{props.company}</p>
        </div>
    )
}