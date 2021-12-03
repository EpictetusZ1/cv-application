import React, { Component } from "react";
import styles from "../styles/DisplayData.module.css"

class DisplayEducation extends Component {

    formatData = (object) => {
        const { schoolName, degreeName, startYear, endYear} = object
        return (
            <div>
                <h2>Educational Information: </h2>
                <p> <b>School: </b> {schoolName}</p>
                <p> <b>Degree: </b> {degreeName}</p>
                <p> <b>From: </b> {startYear} - {endYear}</p>
            </div>
        )
    }

    render() {
        const { ...fields } = this.props.dataObj
        const btnRef = this.props.btnRef
        return (
            <div className={styles.resumeBlock} >
                <button className={styles.editContent} onClick={btnRef}>Edit</button>

                {this.formatData(fields)}
            </div>
        )
    }
}

export default DisplayEducation