
//checkbox component

import React from "react"

function Checkbox(props) {

    //style if task is completed
    const completedStyle = {
        fontSize: 30,
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    //style of not completed
    const notCompletedStyle = {
        fontSize: 30,
        color: "#bababa"
    }

    return(
        <div className="todoitem">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : notCompletedStyle}>
                {props.item.text}
            </p>
        </div>
    )
}

export default Checkbox;
