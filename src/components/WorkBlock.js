import React, {useState} from "react";
import styles from "../styles/StyleMain.module.css"


function WorkBlock(props) {
    const [workData, setWorkData] = useState(props.data)

    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        setWorkData({...workData, [name]: target.value})
    }

    return (
        <div className={styles.dataBlock}>
            <form onSubmit={ (e) => props.updateParent(e, workData) }>
                <h2>Add Work Information: </h2>
                <div className={styles.formEl}>
                    <label htmlFor="Company">Company: </label>
                    <input type="text"
                           id="companyName"
                           name="companyName"
                           placeholder="Company Name"
                           value={workData.companyName}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="position">Position Title: </label>
                    <input type="text"
                           id="position"
                           name="position"
                           placeholder="Position"
                           value={workData.position}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="duties">Job Duties: </label>
                    <input type="text"
                           id="jobDuties"
                           name="jobDuties"
                           placeholder="Job Duties"
                           value={workData.jobDuties}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="employStart">Start Year: </label>
                    <input type="text"
                           id="employStart"
                           name="employStart"
                           placeholder="Start Year"
                           value={workData.employStart}
                           onChange={handleChange}
                    />
                </div>
                <div className={styles.formEl}>
                    <label htmlFor="employEnd">End Year: </label>
                    <input type="text"
                           id="employEnd"
                           name="employEnd"
                           placeholder="End Year"
                           value={workData.employEnd}
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


export default WorkBlock