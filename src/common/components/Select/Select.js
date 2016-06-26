import * as React from "react";
import ExternalSelect from "react-select";
import "react-select/dist/react-select.css";

export default class Select extends React.Component {

    getOptions() {
        if (Array.isArray(this.props.options)) {
            return this.props.options
        }

        if (typeof this.props.options === "object") {
            return Object.getOwnPropertyNames(this.props.options).map((key, value) => {
                return {value: key, label: this.props.options[key]}
            });
        }
    }
    
    render() {
        const props = Object.assign({}, this.props, {options: this.getOptions()});

        return (
            <ExternalSelect
                {...props}
            />
        )
    }
}