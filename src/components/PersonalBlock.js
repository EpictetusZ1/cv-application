import React, {useState} from "react";
import styles from "../styles/StyleMain.module.css"

function PersonalBlock(props) {
    const [personalData, setPersonalData] = useState(props.data)

    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        setPersonalData({...personalData, [name]: target.value })
    }

    return (
        <div className={styles.dataBlock}>
            <form onSubmit={ (e) => props.updateParent(e, personalData) }>
                <h2>Add Personal Information: </h2>
                <div className={styles.formEl}>
                    <label htmlFor="personName">Name: </label>
                    <input type="text"
                           id="personName"
                           name="name"
                           placeholder="Name"
                           value={personalData.name}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="personEmail">Email: </label>
                    <input type="text"
                           id="personEmail"
                           name="email"
                           placeholder="Email"
                           value={personalData.email}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="personPhone">Phone: </label>
                    <input type="text"
                           id="personPhone"
                           name="phone"
                           placeholder="Phone"
                           value={personalData.phone}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="personCity">City: </label>
                    <input type="text"
                           id="personCity"
                           name="city"
                           placeholder="City"
                           value={personalData.city}
                           onChange={handleChange}
                    />
                </div>
                <button className={styles.submitBtn} type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PersonalBlock