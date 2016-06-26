import * as React from "react";
import ExternalSelect from "react-select";

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
        return (
            <ExternalSelect
                options={this.getOptions()}
                onChange={this.props.onChange}
                value={this.props.value}
            />
        )
    }
}