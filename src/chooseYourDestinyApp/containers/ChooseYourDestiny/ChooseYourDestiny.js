import React from "react";
import {connect} from "react-redux";
import * as Actions from "../../actions/index";
import DestinySelector from "./../../components/DestinySelector/DestinySelector"
import "./ChooseYourDestiny.css"

class ChooseYourDestiny extends React.Component {

    onChange = (value) => {
        this.props.dispatch(Actions.setChosenDestiny(value))
    };

    render() {
        return (
            <div className="chooseYourDestiny">
                <div className="logoWrapper"><div className="logo"/></div>
                <DestinySelector
                    onChange={this.onChange}
                    character={this.props.destiny.character}
                    fightingStyle={this.props.destiny.fightingStyle}
                    weapon={this.props.destiny.weapon}
                />
            </div>
        )
    }
}

ChooseYourDestiny.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    destiny: React.PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        destiny: state.chooseYourDestinyApp.destiny
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseYourDestiny)