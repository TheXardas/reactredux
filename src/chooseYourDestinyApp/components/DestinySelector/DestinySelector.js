import React from "react";
import {Select} from "./../../../common/components"
import "./DestinySelector.css"

export default class DestinySelector extends React.Component {

    getCharacterOptions = () => {
        return {
            subzero: "Sub-Zero",
            scorpion: "Scorpion",
            liukang: "Liu Kang"
        }
    };

    getFightingStyleOptions = () => {
        switch (this.props.character) {
            case "subzero":
                return {
                    shotokan: "Shotokan",
                    dragonkungfu: "Dragon Kung Fu"
                };
            case "scorpion":
                return {
                    hapkido: "Hapkido",
                    pigua: "Pi Gua"
                };
            case "liukang":
                return {
                    dragonkungfu: "Dragon Kung Fu"
                };
            default:
                return;
        }
    };

    getWeaponOptions = () => {
        switch (this.props.fightingStyle) {
            case "dragonkungfu":
                switch (this.props.character) {
                    case "subzero":
                        return {
                            icescepter: "Ice Scepter"
                        };
                    case "liukang":
                        return {
                            dragonsword: "Dragon Sword"
                        };
                    default:
                        return;
                }
            case "shotokan":
                return {
                    nunchaku: "Nunchaku"
                };
            case "hapkido":
                return {
                    kunai: "Kunai",
                    broadsword: "Broadsword"
                };
            default:
                return;
        }
    };
    
    getDestinyBySelectChange(select, value) {
        // Considering changed select, we might require to clear dependend values.
        let result = {
            character: null,
            fightingStyle: null,
            weapon: null
        };
        switch (select) {
            case "character":
                return Object.assign(result, {character: value});
            case "fightingStyle":
                return Object.assign(result, {
                    character: this.props.character,
                    fightingStyle: value
                });
            case "weapon":
                return Object.assign(result, {
                    character: this.props.character,
                    fightingStyle: this.props.fightingStyle,
                    weapon: value
                });
            default:
                return result;
        }
    }

    getOnChange = (select) => {
        if (!this.props.onChange) {
            return
        }
        
        return (value) => {
            if (value) {
                value = value.value;
            }
            this.props.onChange(this.getDestinyBySelectChange(select, value))
        }
    };

    renderCharacterSelect() {
        return (
            <Select
                placeholder="Воин"
                className="destinySelectorSelect characterSelect"
                id="character"
                onChange={this.getOnChange("character")}
                options={this.getCharacterOptions()}
                value={this.props.character}
            />
        )
    }

    renderFightingStyleSelect() {
        const options = this.getFightingStyleOptions();
        if (!options) {
            return
        }
        return (
            <Select
                placeholder="Стиль боя"
                className="destinySelectorSelect fightingStyleSelect"
                id="fightingstyle"
                onChange={this.getOnChange("fightingStyle")}
                options={options}
                value={this.props.fightingStyle}
            />
        )
    }

    renderWeaponSelect() {
        const options = this.getWeaponOptions();
        if (!options) {
            return
        }
        return (
            <Select
                placeholder="Оружие"
                className="destinySelectorSelect weaponSelect"
                id="weapon"
                onChange={this.getOnChange("weapon")}
                options={options}
                value={this.props.weapon}
            />
        )
    }

    render() {
        return (
            <div className="destinySelector">
                {this.renderCharacterSelect()}
                {this.renderFightingStyleSelect()}
                {this.renderWeaponSelect()}
            </div>
        )
    }
}