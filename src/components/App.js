
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
        this.handleChange = this.handleChange.bind(this)
    }

    //map checkboxes tp checkbox component
    //allow for handleChange in case of completed
    setCheckBoxes() {
        return(
            this.state.checkboxes.map(checkbox => {
            return(<Checkbox
                key={checkbox.id}
                item={checkbox}
                handleChange={this.handleChange}
            />)
        }))
    }

    //handle a button change (completed or not)
    handleChange(id) {
        this.setState(prevState => {
            const updated = prevState.checkboxes.map(checkbox => {
                if(checkbox.id === id) {
                    return {
                        ...checkbox,
                        completed: !checkbox.completed
                    }
                }
                return checkbox
            })
            return{
                checkboxes: updated
            }
        })
    }

    //render to-do list
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