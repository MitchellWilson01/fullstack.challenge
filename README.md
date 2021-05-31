# [Double](https://withdouble.com) · Full-stack engineering challenge

:wave: If you're looking for an adventure, [look no further](https://withdouble.com/jobs).

## Instructions

- To complete this challenge, you will need `npm`, `node` and `git` installed locally
- Solve each level in order
- Include the `.git` directory when submitting your solution
- Don't spend more than **4 hours** on this test
- To start the app:
  - run `npm i`
  - run `npm start`
  - open `http://localhost:8080/`
- If needed, here are the documentation links of: [React](https://reactjs.org/) and [Luxon](https://moment.github.io/luxon/index.html)

### Pointers

- Keep in mind that you are working on an existing code-base.
- Code should be clean, extensible and robust. Don't overlook edge cases.
- You will have to create some basic UI. While we're not expecting you to be a skilled designer, it should come close to the look and feel of the app. We _are_ looking for engineers with some product-sense.
- We like [emojis](https://gitmoji.carloscuesta.me/) :wink:

### Submitting your results

- Fork this repository
- Open a PR on your fork (please do not open a PR on this repo)
- Share your forked repo with [@pierre-elie](https://github.com/pierre-elie), [@augustinr](https://github.com/augustinr) and [@flobories](https://github.com/flobories)

We will review your code within 3 days and will be in touch via email

Let's do this! :muscle:

## Challenge

**Double helps executives and their assistants work better together**. Managing agendas is an important part of an assistant's job, and we're inviting you to join our mission of making assistants's lives easier.

### Level 1: Agenda's title bug fix

One of our users just submitted a bug report: the agenda's title ("Good morning", "Good afternoon", etc.) does not always update as the day goes by.
Identify the source of this behavior and fix it.

### Level 2: Handle errors

It seems that, occasionally, an uncatched error happens when the account is refreshed. Make sure the error is caught and that the user is aware that the refresh failed.

### Level 3: Filter agenda events by calendar

We want to add a filtering mechanism on agenda events. The requirements for this feature are:

1. Add a select menu that will filter events by `calendar`
2. When a calendar is selected, only events from that calendar are displayed
3. By default `all` calendars are displayed

### Level 4: Group agenda events by department

Another enhancement would be to show all calendar events in one page, grouping them by `department`. Here is a quick mock-up of what the feature could look like:

<img src="https://user-images.githubusercontent.com/45558407/61964225-5f967b80-af9b-11e9-9e39-b201a5644bf9.png" width="300" />

The requirements for this feature are:

1. Add a button to toggle groups by `department`
2. When enabled, events will be grouped and each group will be clearly identified
3. In each group, events will be sorted by ascending date-time

### Questions

Please add your answers to the questions below:

1. How long did you spend on this challenge?
  * I spent the full 4 hours in total on this challenge.

2. In your opinion, what are features that Double could work on that would be helpful for assistants when managing agendas?
  * Events could optionally be added with a time stamp and assistants could have the option to sort and filter events by their date and time. This would let assistants know if there are any tasks that have a strict deadline and better plan out how they will complete their agendas.
  * Assistants could have the option to add notes to an event or to all events of a given department. This way the assisstants can document any unique requirements that their executive might have for an event. A more complex solution to this problem would be to allow for each event to contain subevents.
  * Calendars should be added with a name (or have the option to add a name) so that it is more obvious to the assistant which calendar they are selecting when they are filtering by a certain calendar
  * Events could have a circle next to them that the assistant could use to change the state of the event. All events could be incomplete by default and the assistant could click the circle to cycle through incomplete, in progress, and complete. Each of these stages could be indicated visually by changing the color of the circle or something simailar.
  * While all events are important, some might be very important. The ability to mark a certain event(s) as important by clicking a small icon on the event that would slightly change its appearance (i.e give it a red border) could be useful for assistants. We could toggle this feature by some other means such as double-clicking if we didn't want to clutter up the UI too much. In addition to the other sorting/grouping methods that we've added during this project, we could also add the ability to group events by important. A more complex solution could be to optionally add one of multiple levels of priority to an event.
  * A feature that allows assistants to add multiple "tags" to events could help them categorize events in ways that they find meaningful

3. If you had more time, what would you add or change in the codebase?
  * I would add a seperate component for the header and all of its contents.
  * I would change my solution to the "Handle errors" challenge to render an error message above the list of events on the UI as opposed to the alert box that I used.
  * I would set up a way to better test my solution to the first challenge if I were given more time.
  * I would add some sort of visual indicator for when one of the sorting/grouping options is togglable.
  * I would better style the dropdown list for sorting by calendars. In fact I would probably not use a select tag at all in favor of a custom dropdown menu.
  * Sorting by a calendar takes a second at least on my machine. I would look into redesigning that process so that it is more efficient as well as add a loading spinner somewhere that indicates the results are not yet being displayed. 
  * I would look for ways that I could replace useMemo with useEffect and useState for tasks that aren't computationally intensive

6. Do you have any constructive feedback that you would like to share with our team?
  * I enjoyed this take home challenge more than others because it felt like you were working on a real product. One improvement could be to add a small section in the readme that describes how events, calendars, and agendas are related. It's not very difficult to figure out by reading the code, but it would give the coder a little extra time to work on their solution. I would also love to hear any constructive feedback that you (the reader) may have for me that could help me improve my skills. 
