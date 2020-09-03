
//main app component
import React from "react"

import Checkbox from "./Checkbox";
import todosData from "../data/todoData";

function App() {

    const checkboxes = todosData.map(checkbox => {
        return(<Checkbox
            item={checkbox}
        />)
    })

    return(
        <div className="todolist">
            {checkboxes}
        </div>
    )
}

export default App;