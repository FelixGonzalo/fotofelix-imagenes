import {API_URL} from '../settings'

export default async function deleteCategory (id) {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch( `${API_URL}/categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesToken}`
      }
    });
    const data = await res.json();
    if (!res.ok) throw new Error('Response is NOT ok')
    return data;
  } catch (error) {
    console.log('service error', error)
    throw new Error(error)
  }
}