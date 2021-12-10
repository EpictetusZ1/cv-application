import React, { useState } from "react";
import PersonalBlock from "./PersonalBlock";
import EducationBlock from "./EducationBlock";
import WorkBlock from "./WorkBlock";
import DisplayPersonal from "./DisplayPersonal";
import DisplayEducation from "./DisplayEducation";
import DisplayWork from "./DisplayWork";

import uniqid from "uniqid";
import styles from "../styles/StyleMain.module.css"

function Main() {

    const [personalData, setPersonalData] = useState({
        name: "",
        email: "",
        phone: "",
        city: ""
    })

    const [educationData, setEducationData] = useState({
        schoolName: "",
        degreeName: "",
        startYear: "",
        endYear: ""
    })

    const initWorkState = {
        companyName: "",
        position: "",
        jobDuties: "",
        employStart: "",
        employEnd: "",
        id: uniqid()
    }

    const [jobs, setJobs] = useState([])

    const [workData, setWorkData] = useState(initWorkState)

    const [isDisplayed, setIsDisplayed] = useState({
        personal: false,
        educational: false,
        educationalBtn: true,
        showEduFields: false,
        work: false,
        workBtn: true,
        showWorkFields: false
    })

    const showBtnEdu = (btnState) => {
        if (btnState) {
            return (
                <button className={styles.addSection}
                        onClick={() => {
                            setIsDisplayed({...isDisplayed,
                                educationalBtn: false,
                                showEduFields: true
                            })
                        }}
                > Add Education Information </button>
            )
        }
    }

    const showBtnWork = (btnState) => {
        if (btnState) {
            return (
                <button className={styles.addSection}
                        onClick={() => {
                            setIsDisplayed({...isDisplayed,
                                workBtn: false,
                                showWorkFields: true
                            })
                        }}
                > Add Work Experience </button>
            )
        }
    }

    const togglePersonal = () => {
        setIsDisplayed({ ...isDisplayed, personal: !isDisplayed.personal})
    }

    const toggleEducational = () => {
        setIsDisplayed({ ...isDisplayed,
            educational: !isDisplayed.educational,
            showEduFields: !isDisplayed.showEduFields
        })
    }

    const toggleWork = () => {
        setIsDisplayed({ ...isDisplayed,
            work: !isDisplayed.work,
            showWorkFields: !isDisplayed.showWorkFields,
            workBtn: !isDisplayed.workBtn
        })
    }

    const handleSubmitPersonal = (e, obj) => {
        e.preventDefault()
        togglePersonal()
        setPersonalData({...obj})
    }

    const handleSubmitEducation = (e, obj) => {
        e.preventDefault()
        toggleEducational()
        setEducationData({...obj})
    }

    const handleSubmitWork = (e, obj) => {
        e.preventDefault()
        setJobs([...jobs, obj])
        setWorkData(initWorkState)
        setIsDisplayed({ ...isDisplayed,
            work: true,
            showWorkFields: !isDisplayed.showWorkFields,
            workBtn: !isDisplayed.workBtn
        })
    }

    const editWork = (id) => {
        let target = jobs.find(o => o.id === id)
        let curr = jobs
        let index = curr.indexOf(target)
        let [edit] = curr.splice(index, 1)
        setWorkData(edit)
        toggleWork()
    }

    return (
        <div className={styles.resumeMain}>
            <div className={styles.addDataHalf}>

                {/* Personal Info */}
                { !isDisplayed.personal &&
                    <PersonalBlock data={personalData}
                                   updateParent={handleSubmitPersonal}
                    /> }

                {/* Educational Info */}
                { showBtnEdu(isDisplayed.educationalBtn) }
                { isDisplayed.showEduFields && <EducationBlock data={educationData}
                                                             updateParent={handleSubmitEducation}
                />}
                {/* Practical Info */}
                { showBtnWork(isDisplayed.workBtn) }
                { isDisplayed.showWorkFields && <WorkBlock data={workData}
                                                           updateParent={handleSubmitWork}
                />}
            </div>
            {/* Render Data onto 'CV' */}
            <div className={styles.resumeHalf}>
                { isDisplayed.personal && <DisplayPersonal dataObj={personalData}
                                                           btnRef={togglePersonal}
                />}
                { isDisplayed.educational && <DisplayEducation dataObj={educationData}
                                                               btnRef={toggleEducational}
                /> }
                { isDisplayed.work && <DisplayWork dataArray={jobs}
                                                   btnRef={editWork}
                />}
            </div>
        </div>
    )
}

export default Main