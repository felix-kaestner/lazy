import Lazy from '../src'

test('Lazy', () => {
  let counter = 0
  const lazy = new Lazy(() => {
    counter++
    return 0
  })
  expect(counter).toEqual(0)
  expect(lazy.value).toEqual(0)
  expect(counter).toEqual(1)
  expect(lazy.value).toEqual(0)
  expect(counter).toEqual(1)
})
