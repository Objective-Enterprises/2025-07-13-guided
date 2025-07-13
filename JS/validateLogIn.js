function validateLogIn () {
  const uName = document.getElementById('uName')
  const signOut = document.getElementById('signout')
  const sessionLogin = sessionStorage.getItem('login')
  const login = JSON.parse(sessionLogin)
  if (login) {
    const localUser = localStorage.getItem('user')
    const user = JSON.parse(localUser)
    uName.textContent = user.username
    signOut.addEventListener('click', () => {
      sessionStorage.setItem('login', false)
      window.location.href = '../sign-in.html'
    })
  } else {
    alert('You must login')
    window.location.href = '../sign-in.html'
  }
}