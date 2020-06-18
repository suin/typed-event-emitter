import { EventEmitter } from 'events'

interface TypedEventEmitter<
  Listeners extends { [K in string | symbol]: (...args: any[]) => void }
> extends EventEmitter {
  addListener<T extends keyof Listeners>(event: T, listener: Listeners[T]): this

  on<T extends keyof Listeners>(event: T, listener: Listeners[T]): this

  once<T extends keyof Listeners>(event: T, listener: Listeners[T]): this

  removeListener<T extends keyof Listeners>(
    event: T,
    listener: Listeners[T],
  ): this

  off<T extends keyof Listeners>(event: T, listener: Listeners[T]): this

  removeAllListeners<T extends keyof Listeners>(event?: T): this

  listeners<T extends keyof Listeners>(event: T): Listeners[T][]

  rawListeners<T extends keyof Listeners>(event: T): Listeners[T][]

  emit<T extends keyof Listeners>(
    event: T,
    ...args: Parameters<Listeners[T]>
  ): boolean

  listenerCount<T extends keyof Listeners>(type: T): number

  prependListener<T extends keyof Listeners>(
    event: T,
    listener: Listeners[T],
  ): this

  prependOnceListener<T extends keyof Listeners>(
    event: T,
    listener: Listeners[T],
  ): this
}
