import React, {Component} from "react";
import PersonalBlock from "./PersonalBlock";
import EducationBlock from "./EducationBlock";
import DisplayData from "./DisplayData";
import DisplayEducation from "./DisplayEducation";
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
            practicalData: {

            },
            renderPersonal: false,
            renderEducation: false,
            displayEduFields: false,
            renderPractical: false
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
                    <button className={styles.addSection}>Add Work Experience</button>

                </div>
                {/* Render Data onto 'CV' */}
                <div className={styles.resumeHalf}>
                    { this.state.renderPersonal && <DisplayData dataObj={this.state.personalData}
                                                                btnRef={this.togglePersonal}
                    />}
                    { this.state.renderEducation && <DisplayEducation dataObj={this.state.educationData}
                                                                        btnRef={this.toggleEducation}
                    /> }
                </div>
            </div>
        )
    }
}

export default Main