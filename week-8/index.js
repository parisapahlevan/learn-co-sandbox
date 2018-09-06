//async request
let data = fetch('http://api.github.com/users/mirandamon').then((response) =>{
  return response.json()
}).then((responseJson) => console.log(responseJson))
 
console.log(data)
console.log("hello")