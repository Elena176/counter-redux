import s from '../../App.module.css';
import {Input} from '../Input/Input';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
  getMaxValueFromLocalStorage, getStartValueFromLocalStorage,
  InitialStateSettingsReducerType,
  setDisableButtonSet,
  setMaxValue,
  setStartValue,
} from '../../redux/setting-reducer';
import {Button} from '../Button/Button';
import {disableButtonInc, disableButtonReset, setCounter, setMessageItem} from '../../redux/counter-reducer';

export const DisplaySetting = () => {
  const {
    startValue,
    maxValue,
    disabledSet
  } = useSelector<AppStateType, InitialStateSettingsReducerType>(state => state.settings);

  const dispatch = useDispatch();

  useEffect(() => {
    const getValueString = localStorage.getItem('values')
    if (getValueString) {
      let values = JSON.parse(getValueString)
      dispatch(getMaxValueFromLocalStorage(values.maxValue))
      dispatch(getStartValueFromLocalStorage(values.startValue))
    }
  }, [dispatch])

  const conditions = (startValue < 0 || maxValue < 0) || maxValue < startValue || maxValue === startValue;
  const checkValues = () => {
    dispatch(setDisableButtonSet(false))
    dispatch(disableButtonInc(true))
    dispatch(disableButtonReset(true))
    if (conditions) {
      dispatch(setMessageItem('Error'))
      dispatch(setDisableButtonSet(true))
    } else {
      dispatch(setMessageItem('Setting'));
    }
  }

  const onChangeStartValue = (startValue: number) => {
    dispatch(setStartValue(startValue));
    checkValues()
  }

  const onChangeMaxValue = (maxValue: number) => {
    dispatch(setMaxValue(maxValue))
    checkValues()
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