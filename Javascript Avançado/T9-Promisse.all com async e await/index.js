function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    })
  }, seconds * 1000)
}

const numbers = [10, 32, 51, 83, 28]

async function execute() {
  console.time('map')

  const squares = await Promise.all(numbers.map(async (number) => {
    await waitFor(2)
    return number * number
})) 

console.log(squares)

console.timeEnd('map')
}

execute()