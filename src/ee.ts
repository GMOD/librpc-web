/**
 * @callback listener
 * @param {*} data Any data could be passed to event listener
 */

export default class EventEmitter {
  events = Object.create(null)


  /**
   * Add listener to event. No context provided, use Function.prototype.bind(), arrow function or closure instead.
   * @param  {string}   event    Event name
   * @param  {listener} listener Event listener
   * @return {Emitter}           Return self
   * @example
   *
   * function listener (data) {
   *  console.log(data)
   * }
   *
   * emitter.on('event', listener)
   */
  on(event: string, listener: (arg: unknown) => void) {
    var listeners = this.events[event]

    if (!listeners) {
      listeners = []
      this.events[event] = listeners
    }

    listeners.push(listener)

    return this
  }

  /**
   * Remove listener from event.
   * @param  {string}   event    Event name
   * @param  {listener} listener Event listener
   * @return {Emitter}           Return self
   * @example
   *
   * emitter.off('event', listener)
   */
  off(event: string, listener: (arg: unknown) => void) {
    var listeners = this.events[event]

    if (listeners) {
      var idx = listeners.indexOf(listener)
      if (idx !== -1) {
        listeners.splice(idx, 1)
      }
    }

    return this
  }

  /**
   * Trigger an event. Multiple arguments not supported, use destructuring instead.
   * @param  {string}  event Event name
   * @param  {*}       data  Event data
   * @return {Emitter}       Return self
   * @example
   *
   * emitter.emit('event', { foo: 'bar' })
   */
  emit(event: string, data: any) {
    var listeners = this.events[event]

    if (listeners) {
      for (var i = 0; i < listeners.length; i++) {
        listeners[i](data)
      }
    }

    return this
  }
}

