import {API_URL} from '../settings'

export default async function deleteCategory (id) {
  try {
    const res = await fetch( `${API_URL}/categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if (!res.ok) throw new Error('Response is NOT ok')
    console.log("data eliminada", data)
    return data;
  } catch (error) {
    console.log('service error', error)
    throw new Error(error)
  }
}