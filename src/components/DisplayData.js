import React, {Component} from "react";

class DisplayData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props

        return (
            <div>
                {data.map( (info) => {
                    return <p>{info}</p>
                })}
            </div>
        )
    }
}

export default DisplayData