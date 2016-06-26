import * as React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import * as Redux from "redux"
import reducers from "./reducers"
import ChooseYourDestiny from "./chooseYourDestinyApp/containers/ChooseYourDestiny/ChooseYourDestiny"


let store = Redux.createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <ChooseYourDestiny />
    </Provider>,
    document.getElementById('app')
);