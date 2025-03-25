export class DatePlugin {
  private date: Date = new Date()
  getDate(localeDate: string = 'en-US') {
    const formattedDate = this.date.toLocaleString(localeDate, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    return formattedDate
  }
}
