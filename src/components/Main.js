import React, {Component} from "react";
import PersonalBlock from "./PersonalBlock";
import EducationBlock from "./EducationBlock";
import WorkBlock from "./WorkBlock";
import DisplayData from "./DisplayData";
import DisplayEducation from "./DisplayEducation";
import DisplayWork from "./DisplayWork";

import styles from "../styles/StyleMain.module.css"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalData: {
                name: "",
                email: "",
                phone: "",
                city: "",
            },
            educationData: {
                schoolName: "",
                degreeName: "",
                startYear: "",
                endYear: ""
            },
            workData: {
                companyName: "",
                position: "",
                jobDuties: "",
                employStart: "",
                employEnd: ""
            },
            renderPersonal: false,
            renderEducation: false,
            displayEduFields: false,
            renderWork: false,
            displayWorkFields: false
        }
    }

    addWorkData = () => {
        return {
            companyName: "",
            position: "",
            jobDuties: "",
            employStart: "",
            employEnd: ""
        }
    }

    handleSubmitPersonal = (e, obj) => {
        e.preventDefault()
        this.setState({
            personalData: obj,
            renderPersonal: true
        })
    }

    handleSubmitEducation = (e, obj) => {
        e.preventDefault()
        this.setState({
            educationData: obj,
            renderEducation: true,
            displayEduFields: false
        })
    }

    handleSubmitWork = (e, obj) => {
        e.preventDefault()
        this.setState({
            workData: obj,
            renderWork: true,
            displayWorkFields: false
        })
    }

    togglePersonal = () => {
        this.setState({
            renderPersonal: !this.state.renderPersonal
        })
    }

    toggleEducation = () => {
        this.setState({
            renderEducation: !this.state.renderEducation,
            displayEduFields: true
        })
    }

    toggleWork = () => {
        this.setState({
            renderWork: !this.state.renderWork,
            displayWorkFields: true
        })
    }


    render() {

        return (
            <div className={styles.resumeMain}>
                <div className={styles.addDataHalf}>
                    {/* Personal Info */}
                    { !this.state.renderPersonal &&
                        <PersonalBlock data={this.state.personalData}
                                       updateParent={this.handleSubmitPersonal}
                        /> }

                    {/* Educational Info */}
                    { !this.state.displayEduFields && <button className={styles.addSection}
                                                              onClick={() => this.setState({
                                                                    displayEduFields: !this.state.displayEduFields
                                                              })}
                    > Add Education Information </button>
                    }
                    { this.state.displayEduFields && <EducationBlock data={this.state.educationData}
                                                                    updateParent={this.handleSubmitEducation} />
                    }
                    {/* Practical Info */}
                    {!this.state.displayWorkFields && <button className={styles.addSection} onClick={() => this.setState({
                                                                displayWorkFields: !this.state.displayWorkFields
                                                                })}
                    > Add Work Experience </button>}

                    { this.state.displayWorkFields && <WorkBlock data={this.state.workData}
                                                                 updateParent={this.handleSubmitWork} />
                    }

                </div>
                {/* Render Data onto 'CV' */}
                <div className={styles.resumeHalf}>
                    { this.state.renderPersonal && <DisplayData dataObj={this.state.personalData}
                                                                btnRef={this.togglePersonal}
                    />}
                    { this.state.renderEducation && <DisplayEducation dataObj={this.state.educationData}
                                                                        btnRef={this.toggleEducation}
                    /> }
                    { this.state.renderWork && <DisplayWork dataObj={this.state.workData}
                                                            btnRef={this.toggleWork} />
                        }
                </div>
            </div>
        )
    }
}

export default Main