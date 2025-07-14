export default async function subscribeUser(email) {
  return fetch('https://outmind-pulse-podcast.onrender.com/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  }).then((res) => {
    if (!res.ok) throw new Error('Subscription failed')
    return res.json()
  })
}
