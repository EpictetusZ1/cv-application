import React, {Component} from "react";
import DisplayData from "./DisplayData";

class PersonalBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            city: "",
        }
    }

    handleChange = (e) => {
        switch (e.target.id) {
            default:
                break
            case "personName":
                this.setState({
                    name: e.target.value
                })
                break
            case "personEmail":
                this.setState({
                    email: e.target.value
                })
                break
            case "personPhone":
                this.setState({
                    phone: e.target.value
                })
                break
            case "personCity":
                this.setState({
                    city: e.target.value
                })
                break
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            city: this.state.city
        })


    }
    render() {

        return (
            <div className="dataBlock personalBlock">
                <form className="cvSection" onSubmit={this.handleSubmit}>
                    <h2>Add Personal Information: </h2>
                    <label htmlFor="personName">Name: </label>
                    <input type="text"
                           id="personName"
                           onChange={this.handleChange}
                    />
                    <br/>

                    <label htmlFor="personEmail">Email: </label>
                    <input type="text"
                           id="personEmail"
                           onChange={this.handleChange}
                    />
                    <br/>

                    <label htmlFor="personPhone">Phone: </label>
                    <input type="text"
                           id="personPhone"
                           onChange={this.handleChange}
                    />
                    <br/>

                    <label htmlFor="personCity">City: </label>
                    <input type="text"
                           id="personCity"
                           onChange={this.handleChange}
                    />
                    <br/>

                    <button type="submit">
                        Add Information
                    </button>
                </form>
                <DisplayData data={[this.state.name, this.state.email, this.state.phone, this.state.city]} />
            </div>
        )
    }
}

export default PersonalBlock