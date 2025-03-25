export class LogError {
  public readonly name: string
  public readonly message: string

  constructor(name: string, message: string) {
    this.name = name
    this.message = message

    this.log()
  }

  log() {
    console.log('Error Generate')
    console.log(`Name: ${this.name} \nMessage: ${this.message}`)
  }
}
