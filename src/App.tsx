import React, {useEffect} from 'react';
import s from './App.module.css';
import {DisplaySetting} from './component/DisplaySetting/DisplaySetting';
import {DisplayCounter} from './component/DisplayCounter/DisplayCounter';
import {useDispatch} from 'react-redux';
import {getMaxValueFromLocalStorage, getStartValueFromLocalStorage} from './redux/setting-reducer';

/*
const maxValue = store.getState().settings.maxValue;
const startValue = store.getState().settings.startValue;*/

function App() {
        const dispatch = useDispatch();

    useEffect(() => {
        const getValueString = localStorage.getItem('values')
        if (getValueString) {
            let values = JSON.parse(getValueString)
            dispatch(getMaxValueFromLocalStorage(values.maxValue));
            dispatch(getStartValueFromLocalStorage(values.startValue));
        }
    }, [dispatch])

    return (
        <div className={s.App}>
            <div className={s.setCounter}>
                <DisplaySetting/>
            </div>
            <div className={s.setCounter}>
                <DisplayCounter/>
            </div>

        </div>
    );
}

export default App;
