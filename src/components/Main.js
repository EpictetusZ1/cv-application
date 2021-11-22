import React, {Component} from "react";
import PersonalBlock from "./PersonalBlock";

class Main extends Component {
    render() {
        return (
            <div>
                <h1 className={"title"}> CV Generator </h1>
               {/* Personal Info */}
                <PersonalBlock />

               {/* Educational Info */}
               {/* Practical Info */}
            </div>
        )
    }
}

export default Main