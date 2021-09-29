const array = [1, 3, 4, 2, 8, 5, 9, 0, 6, 7]

const linearSearch = (array, item) => {
  for(let i = 0; array.length > i; i++) {
    if(array[i] === item) {
      return i
    }
  }
  return false
}

console.log(linearSearch(array, 5))