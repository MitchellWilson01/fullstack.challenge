import React, { ReactElement } from 'react'
import Account from 'src/models/Account'
import style from './style.scss'

interface Props {
  account: Account
  callback: () => void
}

/**
 * Group component
 * A button to toggle groups by department
 */

const Group = ({ account, callback }: Props): ReactElement => {
  return (
    <button className={style.button} onClick={() => callback()}>
      Department
    </button>
  )
}

export default Group



