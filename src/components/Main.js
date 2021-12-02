import React, {Component} from "react";
import PersonalBlock from "./PersonalBlock";
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

            },
            practicalExpData: {

            },
            renderPersonal: false,
            renderEducational: false,
            renderPractical: false
        }
    }

    handleSubmit = (e, obj) => {
        e.preventDefault()
        this.setState({
            personalData: obj,
            renderPersonal: true
        })
    }

    togglePersonal = () => {
        console.log(this.state)
        this.setState({
            renderPersonal: !this.state.renderPersonal
        })
    }

    render() {

        return (
            <div className={styles.resumeMain}>

                <div className={styles.addDataHalf}>
                    {/* Personal Info */}
                    { !this.state.renderPersonal &&
                        <PersonalBlock data={this.state.personalData}
                                       updateParent={this.handleSubmit}
                        /> }

                    {/* Educational Info */}
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