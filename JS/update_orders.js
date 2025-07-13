const tbody = document.querySelector('tbody')

async function download () {
  const response = await fetch('http://localhost:3000/orders')
  const data = await response.json()
  data.forEach(order => {
    const row = `
      <tr>
        <td>${order.id}</td>
        <td>${order.date}</td>
        <td>${order.name}</td>
        <td>${order.price}</td>
        <td>${order.paymentStatus}</td>
        <td>${order.orderStatus}</td>
        <td></td>
      </tr>
    `
    tbody.innerHTML += row
  })
}
download()