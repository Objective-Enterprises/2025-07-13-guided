const tbody = document.querySelector('tbody')

async function download () {
  const response = await fetch('http://localhost:3000/categories')
  const data = await response.json()
  console.log('data', data)
  data.forEach(category => {
    const row = `
      <tr>
        <td>${category.id}</td>
        <td>${category.name}</td>
        <td>${category.description}</td>
        <td>${category.isActive}</td>
        <td></td>
      </tr>
    `
    tbody.innerHTML += row
  })
}
download()