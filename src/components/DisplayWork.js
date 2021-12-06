import React, { Component } from "react";
import styles from "../styles/DisplayData.module.css"


class DisplayWork extends Component {
    formatData = (object) => {
        const { companyName, position, jobDuties, employStart, employEnd} = object
        return (
            <div>
                <p> <b>Company: </b> {companyName}</p>
                <p> <b>Position: </b> {position}</p>
                <span className={styles.largeAnswer}>
                   <b>Job Duties:</b><p>{jobDuties}</p>
                </span>
                <p> <b>Employed through: </b> {employStart} - {employEnd}</p>
                <hr/>
            </div>
        )
    }


    render() {
        const btnRef = this.props.btnRef
        const  myArray  = this.props.dataArray

        return (
            <div className={styles.resumeBlock}>
                <button className={styles.editContent} onClick={btnRef}>Edit</button>
                <h2>Work Information: </h2>
                <hr className={styles.hr}/>
                <div>
                    {myArray.map( (job) => {
                        return <div key={job.companyName + job.position}> {this.formatData(job)}</div>
                    })}

                </div>
            </div>
        )
    }
}

export default DisplayWork