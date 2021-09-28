
const initialState = {
    startValue: 0,
    maxValue: 1,
    disabledSet: false,
}

export type InitialStateSettingsReducerType = typeof initialState;

type ActionType = ReturnType<typeof setStartValue>
    | ReturnType<typeof setDisableButtonSet>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof getMaxValueFromLocalStorage>
    | ReturnType<typeof getStartValueFromLocalStorage>

export const settingReducer = (state: InitialStateSettingsReducerType = initialState, action: ActionType): InitialStateSettingsReducerType => {
    switch (action.type) {
        case 'SET-START-VALUE': {
            return {
                ...state,
                startValue: action.startValue,
            }
        }
        case 'SET-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.maxValue,
            }
        }
        case  'SET-DISABLE-BTN-SET': {
            return {
                ...state,
                disabledSet: action.disabled,
            }
        }
        case 'GET-MAX-VALUE-FROM-LOCAL-STORAGE': {
            return {
                ...state,
                maxValue: action.value
            }
        }
        case 'GET-START-VALUE-FROM-LOCAL-STORAGE': {
            return {
                ...state,
                startValue: action.value
            }
        }
        default:
            return state
    }
};

export const setStartValue = (startValue: number) => {
    return {type: 'SET-START-VALUE', startValue} as const
}

export const setMaxValue = (maxValue: number) => {
    return {type: 'SET-MAX-VALUE', maxValue} as const
}

export const setDisableButtonSet = (disabled: boolean) => {
    return {type: 'SET-DISABLE-BTN-SET', disabled} as const
}

export const getMaxValueFromLocalStorage = (value: number) => {
    return{type:'GET-MAX-VALUE-FROM-LOCAL-STORAGE', value} as const
}
export const getStartValueFromLocalStorage = (value: number) => {
    return{type:'GET-START-VALUE-FROM-LOCAL-STORAGE', value} as const
}