import React, {Component} from "react";

class PersonalBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: ""
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleChangePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    render() {
        return (
            <div className="dataBlock personalBlock">
                <form className="cvSection">
                    <h2>Add Personal Information: </h2>
                    <label htmlFor="personName">Name: </label>
                    <input type="text"
                           id="personName"
                           onChange={this.handleChangeName}
                    />

                    <label htmlFor="personEmail">Email: </label>
                    <input type="text"
                           id="personEmail"
                           onChange={this.handleChangeEmail}
                    />

                    <label htmlFor="personPhone">Phone: </label>
                    <input type="text"
                           id="personPhone"
                           onChange={this.handleChangePhone}
                    />
                    <button type="submit">
                        Add Information
                    </button>
                </form>
            </div>
        )
    }
}

export default PersonalBlock