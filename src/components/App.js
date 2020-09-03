
//main app component
import React from "react"

import Checkbox from "./Checkbox";
import todosData from "../data/todoData";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            checkboxes: todosData
        }
    }

    setCheckBoxes() {
        return(
            this.state.checkboxes.map(checkbox => {
            return(<Checkbox
                item={checkbox}
            />)
        }))
    }
    render() {
        const checkboxes = this.setCheckBoxes()

        return(
            <div className="todolist">
                {checkboxes}
            </div>
        )
    }
}

export default App;