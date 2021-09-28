import {MessageType} from '../component/DisplayCounter/DisplayCounter';

const initialState = {
    counter: 0,
    disabledInc: true,
    disabledReset: true,
    messageItem: '',
}
export type InitialStateCounterReducerType = typeof initialState;

type ActionTypes = ReturnType<typeof setCounter>
    | ReturnType<typeof incCounter>
    | ReturnType<typeof setMessageItem>
    | ReturnType<typeof disableButtonInc>
    | ReturnType<typeof disableButtonReset>

export const counterReducer = (state: InitialStateCounterReducerType = initialState, action: ActionTypes): InitialStateCounterReducerType => {
    switch (action.type) {
        case 'SET-COUNTER': {
            return {
                ...state,
                counter: action.startValue,
                disabledInc: action.disabled
            }
        }
        case 'SET-MESSAGE-ITEM': {
            return {
                ...state,
                messageItem: action.messageItem
            }
        }
        case 'INC-COUNTER': {
            return {
                ...state,
                counter: action.counter + 1
            }
        }
        case 'DISABLED-BUTTON-INC': {
            return {
                ...state,
                disabledInc: action.disabled
            }
        }
        case 'DISABLED-BUTTON-RESET': {
            return {
                ...state,
                disabledReset: action.disabled
            }
        }
        default:
            return state
    }
}

export const setCounter = (startValue: number, disabled: boolean) => ({type: 'SET-COUNTER', startValue, disabled} as const)

export const incCounter = (counter: number, maxValue: number) => {
    return {type: 'INC-COUNTER', counter, maxValue} as const
}

export const disableButtonInc = (disabled: boolean) => {
    return {type: 'DISABLED-BUTTON-INC', disabled} as const
}

export const disableButtonReset = (disabled: boolean) => {
    return {type: 'DISABLED-BUTTON-RESET', disabled} as const
}
export const setMessageItem = (messageItem: MessageType) => {
    return {type: 'SET-MESSAGE-ITEM', messageItem} as const
}

