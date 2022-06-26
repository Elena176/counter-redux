import {ChangeEvent} from 'react';

type InputPropsType = {
  className: string
  value: number
  onChange: (startValue: number) => void
}

export const Input = (props: InputPropsType) => {

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    props.onChange(value)
  }
  return <input className={props.className} type={'number'} value={props.value} onChange={onChangeValue}/>

};