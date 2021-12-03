import React, {Component} from "react";
import styles from "../styles/StyleMain.module.css"

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

    handleChange = (e) => {
        const target = e.target
        const name = target.name
        this.setState({
            [name]: target.value
        })
    }

    render() {
        const { name, email, phone, city} = this.state
        return (
            <div className={styles.dataBlock}>
                <form onSubmit={ (e) => this.props.updateParent(e, this.state) }>
                    <h2>Add Personal Information: </h2>
                    <div className={styles.formEl}>
                        <label htmlFor="personName">Name: </label>
                        <input type="text"
                               id="personName"
                               name="name"
                               placeholder="Name"
                               value={name}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="personEmail">Email: </label>
                        <input type="text"
                               id="personEmail"
                               name="email"
                               placeholder="Email"
                               value={email}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="personPhone">Phone: </label>
                        <input type="text"
                               id="personPhone"
                               name="phone"
                               placeholder="Phone"
                               value={phone}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="personCity">City: </label>
                        <input type="text"
                               id="personCity"
                               name="city"
                               placeholder="City"
                               value={city}
                               onChange={this.handleChange}
                        />
                    </div>
                    <button className={styles.submitBtn} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default PersonalBlock