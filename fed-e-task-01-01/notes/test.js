

function filter(array, fn) {
  let result = []
  for(let i =0; i< array.length; i++) {
    if(array[i]) {
      result.push(array[i])
    }
  }
  return result
}

let newFilter = filter(arr, (item) => {
  return item % 2 === 0
})