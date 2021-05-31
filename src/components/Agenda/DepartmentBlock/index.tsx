import React, { ReactElement } from 'react'

import Calendar from 'src/models/Calendar'
import Event from 'src/models/Event'

import EventCell from '../EventCell'

import style from './style.scss'

type AgendaItem = {
  calendar: Calendar
  event: Event
}

interface Props {
  group: AgendaItem[]
}

const DepartmentBlock = ({ group }: Props): ReactElement => {
  const title = group[0].event.department == undefined ? 'None' : group[0].event.department

  return (
    <div className={style.block}>
      <span className={style.title}>{title}</span>
      <hr className={style.line} />
      {group.map(({ calendar, event }) => (
        <EventCell key={event.id} calendar={calendar} event={event} />
      ))}
    </div>
  )
}

export default DepartmentBlock