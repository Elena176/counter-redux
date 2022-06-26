import React from 'react';
import s from './App.module.css';
import {DisplaySetting} from './component/DisplaySetting/DisplaySetting';
import {DisplayCounter} from './component/DisplayCounter/DisplayCounter';

function App() {
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
