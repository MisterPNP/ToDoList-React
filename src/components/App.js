
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

    handleChange(id) {
        this.setState(prevState => {
            const updated = prevState.checkboxes.map(checkbox => {
                if(checkbox.id === id) {
                    checkbox.completed = !checkbox.completed
                }
                return checkbox
            })
            return{
                checkboxes: updated
            }
        })
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