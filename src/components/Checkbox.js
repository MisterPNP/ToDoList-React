
//checkbox component

import React from "react"


function Checkbox() {

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
            <input type="checkbox" />
            <p style={styles}>Do this here</p>
        </div>
    )
}

export default Checkbox;
