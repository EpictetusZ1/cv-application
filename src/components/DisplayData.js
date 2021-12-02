import React, {Component} from "react";
import styles from "../styles/DisplayData.module.css"

class DisplayData extends Component {

    formatData = (object) => {
        const { name, email, phone, city} = object
        return (
            <div>
                <h2>General Information: </h2>
                <p> <b>Name: </b> {name}</p>
                <p> <b>Email: </b> {email}</p>
                <p> <b>Phone: </b> {phone}</p>
                <p> <b>City: </b> {city}</p>
            </div>
        )
    }

    render() {
        const { ...fields } = this.props.dataObj
        const btnRef = this.props.btnRef
        return (
            <div className={styles.resumeBlock}>
                <button className={styles.editContent} onClick={btnRef}>Edit</button>

                {this.formatData(fields)}
            </div>
        )
    }
}

export default DisplayData