const tbody = document.querySelector('tbody')

async function download () {
  const response = await fetch('http://localhost:3000/products')
  const data = await response.json()
  console.log('data', data)
  data.forEach(product => {
    const row = `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
        <td>${product.quantity}</td>
        <td>${product.category}</td>
        <td>${product.isAvailable}</td>
        <td>
          <img src="${product.image}" width="30" height="30" />
        </td>
        <td></td>
      </tr>
    `
    tbody.innerHTML += row
  })
}
download()