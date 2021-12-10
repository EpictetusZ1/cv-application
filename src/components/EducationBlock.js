import React, {useState} from "react";
import styles from "../styles/StyleMain.module.css"

function EducationBlock(props) {
    const [eduData, setEduData] = useState(props.data)

    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        setEduData({...eduData, [name]: target.value })
    }

    return (
        <div className={`${styles.dataBlock} educationInfo`}>
            <form onSubmit={ (e) => props.updateParent(e, eduData) }>
                <h2>Add Education Information: </h2>
                <div className={styles.formEl}>
                    <label htmlFor="school">School Name: </label>
                    <input type="text"
                           id="school"
                           name="schoolName"
                           placeholder="Name"
                           value={eduData.schoolName}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="degree">Degree Name: </label>
                    <input type="text"
                           id="degree"
                           name="degreeName"
                           placeholder="Degree"
                           value={eduData.degreeName}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="startYear">Start Year: </label>
                    <input type="text"
                           id="startYear"
                           name="startYear"
                           placeholder="Start"
                           value={eduData.startYear}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="endYear">End Year: </label>
                    <input type="text"
                           id="endYear"
                           name="endYear"
                           placeholder="End Year"
                           value={eduData.endYear}
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

export default EducationBlock