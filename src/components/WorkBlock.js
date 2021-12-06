import React, { Component } from "react";
import styles from "../styles/StyleMain.module.css"

class WorkBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: this.props.data.companyName,
            position: this.props.data.position,
            jobDuties: this.props.data.jobDuties,
            employStart: this.props.data.employStart,
            employEnd: this.props.data.employEnd
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
        const { companyName, position, jobDuties, employStart, employEnd} = this.state

        return (
            <div className={`${styles.dataBlock}`}>
                <form onSubmit={ (e) => this.props.updateParent(e, this.state) }>
                    <h2>Add Work Information: </h2>
                    <div className={styles.formEl}>
                        <label htmlFor="Company">Company: </label>
                        <input type="text"
                               id="companyName"
                               name="companyName"
                               placeholder="Company Name"
                               value={companyName}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="position">Position Title: </label>
                        <input type="text"
                               id="position"
                               name="position"
                               placeholder="Position"
                               value={position}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="duties">Job Duties: </label>
                        <input type="text"
                               id="jobDuties"
                               name="jobDuties"
                               placeholder="Job Duties"
                               value={jobDuties}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="employStart">Start Year: </label>
                        <input type="text"
                               id="employStart"
                               name="employStart"
                               placeholder="Start Year"
                               value={employStart}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.formEl}>
                        <label htmlFor="employEnd">End Year: </label>
                        <input type="text"
                               id="employEnd"
                               name="employEnd"
                               placeholder="End Year"
                               value={employEnd}
                               onChange={this.handleChange}
                        />
                    </div>
                    <button className={styles.submitBtn} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default WorkBlock