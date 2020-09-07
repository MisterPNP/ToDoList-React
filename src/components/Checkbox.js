
//checkbox component

import React from "react"

function Checkbox(props) {

    const styles = {
        fontSize:30
    }

    const date = new Date()
    const time = date.getHours()

    if(time < 12) {
        styles.color = "#00FFFF"
    } else if(time >= 12 && time < 18) {
        styles.color = "#FF8C00"
    } else {
        styles.color = "#00008B"
    }

    return(
        <div className="todoitem">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={styles}> {props.item.text} </p>
        </div>
    )
}

export default Checkbox;
