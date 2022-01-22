import {API_URL} from '../settings'

export default async function addCategory (formData) {
  try {
    const res = await fetch( `${API_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        name: formData.name
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error('Response is NOT ok')
    return data;
  } catch (error) {
    console.log('service error', error)
    throw new Error(error)
  }
}