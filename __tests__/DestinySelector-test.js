jest.unmock("../src/chooseYourDestinyApp/components/DestinySelector/DestinySelector");
jest.unmock("../src/common/components");
jest.unmock("../src/common/components/Select/Select");
jest.unmock("classnames");

import * as React from "react";
import * as ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import DestinySelector from "../src/chooseYourDestinyApp/components/DestinySelector/DestinySelector"


function chooseValue(component, value) {
    let select = ReactDOM.findDOMNode(component);

    let searchInputNode = select.querySelector('input');
    TestUtils.Simulate.focus(searchInputNode);

    var selectArrow = select.querySelector(".Select-arrow");
    TestUtils.Simulate.mouseDown(selectArrow);
    TestUtils.Simulate.mouseDown(select.querySelector("." + value));
}

// TODO write more tests. Check option dependencies.
describe("Tests DestinySelector component", () => {
    it("onChange should work correctly with character set", () => {
        let onChangeCalled = false;
        const component = TestUtils.renderIntoDocument(
            <DestinySelector
                onChange={(value) => {
                    onChangeCalled = true;
                    expect(value.character).toBe("scorpion");
                    expect(value.fightingStyle).toBe(null);
                    expect(value.weapon).toBe(null);
                }}
            />
        );
        
        // 1. Default position: only character select is visible
        TestUtils.findRenderedDOMComponentWithClass(component, "characterSelect");
        expect(TestUtils.scryRenderedDOMComponentsWithClass(component, "fightingStyleSelect").length).toBe(0);
        expect(TestUtils.scryRenderedDOMComponentsWithClass(component, "weaponSelect").length).toBe(0);

        chooseValue(component, "scorpion");
    });
});