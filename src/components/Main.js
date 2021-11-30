import React, {Component} from "react";
import PersonalBlock from "./PersonalBlock";
import DisplayData from "./DisplayData";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalData: {
                name: "",
                email: "",
                phone: "",
                city: "",
            },
            educationData: {

            },
            practicalExpData: {

            },
            renderPersonal: false,
            renderEducational: false,
            renderPractical: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e, obj) {
        e.preventDefault()
        this.setState({
            personalData: obj,
            renderPersonal: true
        })
    }

    render() {

        return (
            <div>
                <h1 className={"title"}> CV Generator </h1>
                {/* Personal Info */}
                {/* Conditional Render to Remove form on submit*/}
                {!this.state.renderPersonal && <PersonalBlock data={this.state.personalData} updateParent={this.handleSubmit} />}
                {this.state.renderPersonal && <DisplayData dataObj={this.state.personalData} />}

                {/* Educational Info */}
                {/* Practical Info */}
            </div>
        )
    }
}

export default Main