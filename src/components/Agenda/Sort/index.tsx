import React, { ReactElement } from 'react'
import Account from 'src/models/Account'
import style from './style.scss'

interface Props {
  account: Account
  callback: (id: string) => void
}

/**
 * Sort component
 * A select menu that will filter events by calendar
 */

const Sort = ({ account, callback }: Props): ReactElement => {

  return (
    <select className={style.select} onChange={id => callback(id.target.value)}>
      <option value=''>All</option>
      {account.calendars.map((calendar, index) => (
        <option key={calendar.id} value={calendar.id}>Calendar {index + 1}</option>
      ))}
    </select>
  )
}

export default Sort