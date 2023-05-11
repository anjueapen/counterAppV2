export const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
    DECREMENT_BY: "DECREMENT_BY",
    INCREMENT_BY: "INCREMENT_BY"
}

export const counterReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                count: state.count + 1
            };
        case ACTIONS.DECREMENT:
            return {
                count: state.count - 1
            };
        case ACTIONS.RESET:
            return {
                count: 0
            };
        case ACTIONS.DECREMENT_BY:
            return {
                count: state.count - action.payload.count
            };
        case ACTIONS.INCREMENT_BY:
            return {
                count: state.count + action.payload
            };
        default:
            return state;
    };
}
