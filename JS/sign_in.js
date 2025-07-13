const form = document.querySelector('form')
const message = document.getElementById('message')
const username = document.getElementById('userName')
const password = document.getElementById('password')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const localUser = localStorage.getItem('user')
  const user = JSON.parse(localUser)
  if (user.username !== username.value || user.password !== password.value) {
    message.textContent = 'Register before signing in'
    return
  }
  sessionStorage.setItem('login', true)
  window.location.href = './html/index.html'
})