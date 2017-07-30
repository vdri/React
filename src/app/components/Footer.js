import React from "react";

//functional components

export function Footer(props) {
    return (
        <div className="footer">
            <hr />
            <span>Copyrights</span>
            <p>@{props.year}, {props.company}</p>
        </div>
    )
}