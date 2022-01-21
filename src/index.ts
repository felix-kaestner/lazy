/**
 * A Class containing a lazy initialized value
 *
 * @public
 */
export default class Lazy<T> {
  private _value: T | undefined

  constructor(private initializer: () => T) {}

  public get value(): T {
    return (this._value ??= this.initializer())
  }
}
