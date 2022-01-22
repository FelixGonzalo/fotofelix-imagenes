import {API_URL} from '../settings'

export default async function getCategories () {
  try {
    const res = await fetch( `${API_URL}/categories`, {
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