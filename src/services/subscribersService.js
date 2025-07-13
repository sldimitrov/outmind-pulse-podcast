export async function subscribeUser(email) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email})
  })

  if (!response.ok) {
    throw new Error('Failed to subscribe user');
  }

  return response.json()
}
