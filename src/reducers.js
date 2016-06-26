import * as Redux from "redux"
import ChooseYourDestinyApp from "./chooseYourDestinyApp/reducer"

export default Redux.combineReducers({
    chooseYourDestinyApp: ChooseYourDestinyApp
})