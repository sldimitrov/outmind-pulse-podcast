export default async function createClip(clipData) {
  return fetch('https://outmind-pulse-podcast.onrender.com/clip', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(clipData)
  }).then((res) => {
    if (!res.ok) throw new Error('Clip creation failed')
    return res.json()
  })
}
