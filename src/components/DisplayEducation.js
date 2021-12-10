import React from "react";
import styles from "../styles/DisplayData.module.css"

function DisplayEducation(props) {
    const { ...fields } = props.dataObj
    const btnRef = props.btnRef

    const formatData = (object) => {
        const { schoolName, degreeName, startYear, endYear} = object
        return (
            <div>
                <h2>Educational Information: </h2>
                <hr className={styles.hr} />
                <p> <b>School: </b> {schoolName}</p>
                <p> <b>Degree: </b> {degreeName}</p>
                <p> <b>From: </b> {startYear} - {endYear}</p>
            </div>
        )
    }

    return (
        <div className={styles.resumeBlock} >
            <button className={styles.editContent} onClick={btnRef}>Edit</button>
            {formatData(fields)}
        </div>
    )
}

export default DisplayEducation