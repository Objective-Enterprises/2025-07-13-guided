const registerForm = document.getElementById('registerForm')
const fullname = document.getElementById('fullname')
const username = document.getElementById('username')
const email = document.getElementById('email')
const contact = document.getElementById('contact')
const password = document.getElementById('pswd')
console.log('password', password)
const confirmPassword = document.getElementById('confirm-password')

registerForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const match = password.value === confirmPassword.value
  if (!match) {
    return
  }
  const user = {
    fullname: fullname.value,
    username: username.value,
    email: email.value,
    contact: contact.value,
    password: password.value,
  }
  const userString = JSON.stringify(user)
  localStorage.setItem('user', userString)
  window.location.href = './sign-in.html'
})