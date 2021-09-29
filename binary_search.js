const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

let count = 0

const binarySearch = (array, item) => {
  let start = 0
  let end = array.length
  let middle
  let found = false
  let position = -1
  while (found === false && start <= end) {
    count+=1
    middle = Math.floor((start + end) / 2)
    console.log('middle =', middle, array[middle])
    if (array[middle] === item) {
      found = true
      position = middle
      return position
    }
    if (item < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return position
}

console.log(binarySearch(array, 8))
console.log(count)