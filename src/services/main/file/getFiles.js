import {API_URL} from '../settings'

export default async function getFiles () {
  try {
    const res = await fetch(`${API_URL}/images`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if (Array.isArray(data)) return data
    return []
  } catch (error) {
    console.log('service error', error)
    throw new Error(error)
  }
}