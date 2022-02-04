import {API_URL} from '../settings'

export default async function editCategory (formData) {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch( `${API_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesToken}`
      },
      body:  JSON.stringify({
        id: formData.id,
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