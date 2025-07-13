const form = document.getElementById('categoryForm')
const name = document.getElementById('category')
const description = document.getElementById('desc')
const isActive = document.getElementById('is_available')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const category = {
    name: name.value,
    description: description.value,
    isActive: isActive.checked,
  }
  console.log('category', category)
  const body = JSON.stringify(category)
  const init = { method: 'POST', body }
  await fetch('http://localhost:3000/categories', init)
  form.reset()
  window.location.href = './list_categories.html'
})