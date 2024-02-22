declare module '@librpc/ee' {
  export type Listener = (event: any) => void

  export default class Emitter {
    events: Record<'string', Listener[]>
    on(event: string, listener: Listener): this
    off(event: string, listener: Listener): this
    emit(event: string, data: unknown): this
  }
}
