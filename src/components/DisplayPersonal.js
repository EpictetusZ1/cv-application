import React from "react";
import styles from "../styles/DisplayData.module.css"

function DisplayPersonal(props) {
    const { ...fields } = props.dataObj
    const btnRef = props.btnRef

    const formatData = (object) => {
        const { name, email, phone, city} = object
        return (
            <div>
                <h2>General Information: </h2>
                <hr className={styles.hr}/>
                <p> <b>Name: </b> {name}</p>
                <p> <b>Email: </b> {email}</p>
                <p> <b>Phone: </b> {phone}</p>
                <p> <b>City: </b> {city}</p>
            </div>
        )
    }

    return (
        <div className={styles.resumeBlock}>
           <button className={styles.editContent} onClick={btnRef}>Edit</button>
            {formatData(fields)}
        </div>
    )
}

export default DisplayPersonal