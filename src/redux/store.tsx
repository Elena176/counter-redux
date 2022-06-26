import {combineReducers, createStore} from 'redux';
import {settingReducer} from './setting-reducer';
import {counterReducer} from './counter-reducer';

const rootReducer = combineReducers({
  settings: settingReducer,
  counter: counterReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;