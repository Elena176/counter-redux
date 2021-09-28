import s from '../../App.module.css';
import {Button} from '../Button/Button';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    disableButtonInc,
    disableButtonReset,
    incCounter,
    InitialStateCounterReducerType,
    setCounter
} from '../../redux/counter-reducer';
import {InitialStateSettingsReducerType} from '../../redux/setting-reducer';

export type MessageType = 'Setting' | 'Error' | 'Count'

export const DisplayCounter = () => {
    const {counter, disabledInc, disabledReset, messageItem} = useSelector<AppStateType, InitialStateCounterReducerType>(state => state.counter)
    const {maxValue, startValue} = useSelector<AppStateType, InitialStateSettingsReducerType>(state => state.settings)

    const dispatch = useDispatch();

    const classError = counter === maxValue ? s.error : s.counter
    const onClickButtonInc = () => {
        dispatch(incCounter(counter, maxValue));
        if (counter + 1 >= maxValue) {
            dispatch(disableButtonInc(true))
            dispatch(disableButtonReset(false))
        }
    }

    const onClickButtonReset = () => {
        dispatch(setCounter(startValue, false))
    }

    const message = () => {
        switch (messageItem) {
            case 'Setting': {
                return <div> enter values and press 'set' </div>;
            }
            case 'Error': {
                return <div className={s.errorMessage}>Incorrect value!</div>
            }
            case 'Count': {
                return <div className={classError}>{counter}</div>
            }
            default:
                return <div className={s.counter}>{counter}</div>;
        }
    }

    return (
        <>
            <div className={s.display}>
                <div>{message()}</div>
            </div>
            <div className={s.buttons}>
                <Button name={'INC'}
                        disabled={disabledInc}
                        onClick={onClickButtonInc}/>
                <Button name={'RESET'}
                        disabled={disabledReset}
                        onClick={onClickButtonReset}/>
            </div>
        </>
    )
}