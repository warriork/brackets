module.exports = function check(str, bracketsConfig) {
  if (str.length%2) {
    return false
  }
  const keys = {}
  const arr = []
 bracketsConfig.forEach(elem => keys[elem[0]]=elem[1])
  bracketsConfig.forEach(elem => arr.push(elem[0]+elem[1]))
  console.log(arr)
const input = str.split('')
let k = 0
while(true) {
for (let i = 0; i < input.length; i++) {
  for (let value in keys) { 
  if (input[i]===value && input[i+1]===keys[value]) {
    input.splice(i, 2)
  }
  }
  k++
  if (k>5000) {return false}
  if (input.length === 0) {return true}
}
}
}
