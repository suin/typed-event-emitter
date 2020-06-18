# @suin/typed-event-emitter

Strongly typed EventEmitter interface for TypeScript.

## Installation

```bash
yarn add @suin/typed-event-emitter
# or
npm install @suin/typed-event-emitter
```

## Usage

```typescript
import { EventEmitter } from 'events'
import { TypedEventEmitter } from '@suin/typed-event-emitter'

const event = new EventEmitter() as TypedEventEmitter<{
  success: (value: string) => void
  failure: (error: Error) => void
}>
event.on('success', value => {
  console.log('success! %o', value)
})
event.on('failure', error => {
  console.log('failure! %o', error)
})
event.emit('success', `It's OK`)
event.emit('failure', new Error('Something wrong...'))

// Followings occurs compile errors!
event.on('foobar', value => {})
//       ^^^^^^^^
// 🚫Argument type "foobar" is not assignable to parameter type keyof {success: (value: string) => void, failure: (error: Error) => void}
event.on('success', (value: number) => {})
//                  ^^^^^^^^^^^^^^^^^^^^^
// 🚫Argument type (value: number) => void is not assignable to parameter type {success: (value: string) => void, failure: (error: Error) => void}["success"]
```

## API Reference

https://suin.github.io/typed-event-emitter/
