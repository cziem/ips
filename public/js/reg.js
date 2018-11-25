const url = 'localhost:3000/users/add_new'

let formData = [...document.querySelector('form')]

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()

  let data = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    nin: ''
  }

  formData.forEach(datum => {
    if (datum.name !== 'submit') {
      data[datum.name] = datum.value
    }
  })
  
  fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(resp => resp.json())
    .then(data => console.log(data))

})


// console.log(formData)