# React Notification Base

This is a simple react notification component to display notifications or hint texts

# Prerequisites

This project requires NodeJs (Version 8 or later) and NPM. Node and NPM are really easy to install> To make sure you have them available on your machine, try running the following command.

$ npm -v && node -v
6.4.1
v8.16.0

## Installation

```
npm install react-notification-base
```

**Usage**

```
import {Hint} from 'react-notification-base'
...

```

**Usage in Code**

```
import {Hint} from 'react-notification-base'

const myApp = () => {
    ...
    <Hint/>
   }

```

> Default type is _info_ and default variant is _contained_

# Props

| prop        | value                                                    | description                                                                       |
| ----------- | -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| type        | 'success', 'error', 'warning', info. (Default is 'info') | The type of notification                                                          |
| variant     | 'contained','outlined' Default('contained')              | This defines the notification variant                                             |
| dismissible | boolean (Default is _true_)                              | If set to _false_, it won't be dismissible and the _cancel_ icon will be removed. |
| isAnimated  | boolean (Default is _true_)                              | The notificaton component is animated in and out                                  |
| label       | _string_                                                 | The text that will be displayed on the component                                  |
