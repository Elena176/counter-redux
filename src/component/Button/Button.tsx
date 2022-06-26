import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
  name: string
  disabled: boolean
  onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
  const onClickButtonSet = () => {
    props.onClick()
  }
  return <button className={s.btn} disabled={props.disabled} onClick={onClickButtonSet}><span>{props.name}</span>
  </button>
}