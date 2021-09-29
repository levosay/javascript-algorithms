const array = [4, 3, 8, -1, 1, 66, -3, 9, 12, 0, 10, 3, 2, 7, 5, 12]
let count = 0

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
      count += 1
    }
    let temp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = temp
  }
  return array
}

console.log(selectionSort(array))
console.log('count =', count)

