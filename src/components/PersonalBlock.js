import React, {Component} from "react";

class PersonalBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.data.name,
            email: this.props.data.email,
            phone: this.props.data.phone,
            city: this.props.data.city,
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    render() {
        return (
            <div className="dataBlock personalBlock">
                <form className="cvSection" onSubmit={ (e) =>  this.props.updateParent(e, this.state) }>
                    <h2>Add Personal Information: </h2>
                    <label htmlFor="personName">Name: </label>
                    <input type="text"
                           id="personName"
                           onChange={this.handleNameChange}
                    />
                    <br/>

                    <label htmlFor="personEmail">Email: </label>
                    <input type="text"
                           id="personEmail"
                           onChange={this.handleEmailChange}
                    />
                    <br/>

                    <label htmlFor="personPhone">Phone: </label>
                    <input type="text"
                           id="personPhone"
                           onChange={this.handlePhoneChange}
                    />
                    <br/>

                    <label htmlFor="personCity">City: </label>
                    <input type="text"
                           id="personCity"
                           onChange={this.handleCityChange}
                    />
                    <br/>

                    <button type="submit">
                        Add Information
                    </button>
                </form>

            </div>
        )
    }
}

export default PersonalBlock