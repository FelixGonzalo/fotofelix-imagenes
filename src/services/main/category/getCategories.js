import {API_URL} from '../settings'

export default async function getCategories () {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch( `${API_URL}/categories`, {
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