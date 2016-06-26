export const SET_CHOSEN_DESTINY = "destinySelectorApp/actions/SET_CHOSEN_DESTINY";

export function setChosenDestiny(value) {
    return {
        type: SET_CHOSEN_DESTINY,
        payload: {
            value
        }
    }
}