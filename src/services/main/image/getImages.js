import {API_URL} from '../settings'

export default async function getImages () {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch(`${API_URL}/images`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesToken}`
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

export async function getImagesByCustomerId (customerId) {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch(`${API_URL}/images/search?clientId=${customerId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesToken}`
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