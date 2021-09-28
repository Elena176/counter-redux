import s from '../../App.module.css';
import {Input} from '../Input/Input';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    InitialStateSettingsReducerType,
    setDisableButtonSet,
    setMaxValue,
    setStartValue,
} from '../../redux/setting-reducer';
import {Button} from '../Button/Button';
import {disableButtonInc, disableButtonReset, setCounter, setMessageItem} from '../../redux/counter-reducer';

export const DisplaySetting = () => {
    // const startValue = useSelector<AppStateType, number>(state => state.settings.startValue);
    // const maxValue = useSelector<AppStateType, number>(state => state.settings.maxValue);
    // const disabledSet = useSelector<AppStateType, boolean>(state => state.settings.disabledSet);

    const {
        startValue,
        maxValue,
        disabledSet
    } = useSelector<AppStateType, InitialStateSettingsReducerType>(state => state.settings);

    const dispatch = useDispatch();

    const checkValues = (value: number, valueStartMax: number) => {
        dispatch(setDisableButtonSet(false))
        dispatch(disableButtonInc(true))
        dispatch(disableButtonReset(true))
        if (value < 0 || value === valueStartMax) {
            dispatch(setMessageItem('Error'))
            dispatch(setDisableButtonSet(true))
        } else {
            dispatch(setMessageItem('Setting'));
        }
    }

    const onChangeStartValue = (startValue: number) => {
        dispatch(setStartValue(startValue));
        checkValues(startValue, maxValue)
    }

    const onChangeMaxValue = (maxValue: number) => {
        dispatch(setMaxValue(maxValue))
        checkValues(maxValue, startValue)
    }

    const onClickButtonSet = () => {
        const values = {
            startValue, maxValue
        }
        localStorage.setItem('values', JSON.stringify(values))
        dispatch(setMessageItem('Count'))
        dispatch(setCounter(startValue, false))
        dispatch(setDisableButtonSet(true))
        dispatch(disableButtonReset(false))
    }

    const classErrorInput = maxValue === startValue ? s.errorInput : s.input;

    return (
        <>
            <div className={s.setting}>
                    <span> {'max value: '}
                        <Input className={classErrorInput}
                               value={maxValue}
                               onChange={onChangeMaxValue}/>
                    </span>
                    <span> {'start value: '}
                    <Input className={classErrorInput}
                           value={startValue}
                           onChange={onChangeStartValue}/>
                    </span>
            </div>
            <div className={s.buttonSet}>
                <Button name={'SET'} disabled={disabledSet} onClick={onClickButtonSet}/>
            </div>
        </>
    )
}