import {API_URL} from '../settings'

export default async function deleteCustomer (id) {
  try {
    const res = await fetch( `${API_URL}/clients/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
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