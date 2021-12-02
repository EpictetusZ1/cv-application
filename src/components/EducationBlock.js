import React, { Component } from "react";
import styles from "../styles/StyleMain.module.css"

class EducationBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: this.props.data.schoolName,
            degreeName: this.props.data.degreeName,
            startYear: this.props.data.startYear,
            endYear: this.props.data.endYear,
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
        const { school, degree, startYear, endYear } = this.state
        return (
            <div className={`${styles.dataBlock} educationInfo`}>
                <form onSubmit={ (e) => this.props.updateParent(e, this.state) }>
                    <h2>Add Education Information: </h2>
                    <div className={styles.formEl}>
                        <label htmlFor="school">School Name: </label>
                        <input type="text"
                               id="school"
                               name="schoolName"
                               placeholder="Name"
                               value={school}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="degree">Degree Name: </label>
                        <input type="text"
                               id="degree"
                               name="degreeName"
                               placeholder="Degree"
                               value={degree}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="startYear">Start Year: </label>
                        <input type="text"
                               id="startYear"
                               name="startYear"
                               placeholder="Start"
                               value={startYear}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="endYear">End Year: </label>
                        <input type="text"
                               id="endYear"
                               name="endYear"
                               placeholder="End Year"
                               value={endYear}
                               onChange={this.handleChange}
                        />
                    </div>
                    <button className={styles.submitBtn} type="submit">
                        Add Information
                    </button>
                </form>
            </div>
        )
    }
}

export default EducationBlock