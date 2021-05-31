import React, { ReactElement, useContext, useMemo, useState } from 'react'
import { DateTime } from 'luxon'

import greeting from 'lib/greeting'

import Calendar from 'src/models/Calendar'
import Event from 'src/models/Event'
import AccountContext from 'src/context/accountContext'

import List from './List'
import EventCell from './EventCell'
import Sort from './Sort'
import Group from './Group'
import DepartmentBlock from './DepartmentBlock'

import style from './style.scss'

type AgendaItem = {
  calendar: Calendar
  event: Event
}

const compareByDateTime = (a: AgendaItem, b: AgendaItem) =>
  a.event.date.diff(b.event.date).valueOf()

const groupEvents = (agenda: AgendaItem[]) => {
  agenda.sort((a: AgendaItem, b: AgendaItem) => (a.event.department > b.event.department) ? 1 : -1)

  let groups: AgendaItem[][] = []
  let group: AgendaItem[] = []
  let departmentlessGroup: AgendaItem[] = []
  let currentGroup = agenda[0].event.department

  agenda.forEach((item, index) => {
    if (item.event.department == undefined) {
      departmentlessGroup.push(item)
    } else if (item.event.department == currentGroup) {
      group.push(item)
    } else {
      groups.push(group)
      group = [item]
      currentGroup = agenda[index].event.department
    }
  })  

  groups.push(departmentlessGroup)
  groups = groups.filter(group => (group.length > 0));

  return groups;
}

/**
 * Agenda component
 * Displays greeting (depending on time of day)
 * and list of calendar events
 */

const Agenda = (): ReactElement => {
  const [calendarId, setCalendarId] = useState('')
  const [group, setGroup] = useState(false)
  const account = useContext(AccountContext)

  const filterByCalendar = (item: AgendaItem) => {
    if (calendarId === '') {
      return true
    } else {
      return item.calendar.id === calendarId
    }
  }

  const sortCallback = (id: string) => {
    setCalendarId(id)
  }

  const groupCallback = () => {
    setGroup(!group);
  }

  const events: AgendaItem[] = useMemo(
    () =>
      account.calendars
        .flatMap((calendar) =>
          calendar.events.map((event) => ({ calendar, event })),
        )
        .filter(filterByCalendar)
        .sort(compareByDateTime),
    [account],
  )

  const title = useMemo(() => greeting(DateTime.local().hour), [DateTime.local().hour])

  let groups: AgendaItem[][] = []
  if (group) {
    groups = groupEvents(events);
  }

  return (
    <div className={style.outer}>
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.title}>{title}</span>

          <div className={style.options}>
            <Group account={account} callback={groupCallback} />
            <Sort account={account} callback={sortCallback} />
          </div>
        </div>

        {group ? 
        <List>
          {groups.map((group, index) => (
            <DepartmentBlock key={index} group={group} />
          ))} 
        </List>
        : 
        <List>
          {events.map(({ calendar, event }) => (
            <EventCell key={event.id} calendar={calendar} event={event} />
          ))}
        </List>}
       
      </div>
    </div>
  )
}

export default Agenda
