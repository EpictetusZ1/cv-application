import React, {Component} from "react";
import PersonalBlock from "./PersonalBlock";
import EducationBlock from "./EducationBlock";
import DisplayData from "./DisplayData";
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
            practicalExpData: {

            },
            renderPersonal: false,
            renderEducation: false,
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
            renderEducation: true
        })
    }

    togglePersonal = () => {
        this.setState({
            renderPersonal: !this.state.renderPersonal
        })
    }

    toggleEducation = () => {
        this.setState({
            renderEducational: !this.state.renderEducational
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
                    {!this.state.renderEducational &&
                        <button className={styles.addSection}
                            onClick={this.toggleEducation}>
                        Add Education Info
                    </button>}
                    {this.state.renderEducational &&
                        <EducationBlock data={this.state.educationData}
                                        updateParent={this.handleSubmitEducation}
                        />
                    }

                    {/* Practical Info */}
                </div>
                <div className={styles.resumeHalf}>
                    { this.state.renderPersonal && <DisplayData dataObj={this.state.personalData}
                                                                btnRef={this.togglePersonal}
                    />}
                </div>
            </div>
        )
    }
}

export default Main