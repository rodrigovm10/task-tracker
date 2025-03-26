import { DatePlugin } from './date.plugin'

describe('DatePlugin', () => {
  test('should return a formatted date', () => {
    const date = new DatePlugin()
    const formattedDate = date.getDate()

    expect.any(formattedDate)
  })
})
