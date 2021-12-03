import React, { Component } from "react";
import styles from "../styles/DisplayData.module.css"


class DisplayWork extends Component {
    formatData = (object) => {
        const { companyName, position, jobDuties, employStart, employEnd} = object
        return (
            <div>
                <h2>Work Information: </h2>
                <p> <b>Company: </b> {companyName}</p>
                <p> <b>Position: </b> {position}</p>
                <p> <b>Job Duties: </b> {jobDuties}</p>
                <p> <b>Employed through: </b> {employStart} - {employEnd}</p>
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

export default DisplayWork