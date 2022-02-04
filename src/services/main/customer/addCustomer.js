import {API_URL} from '../settings'

export default async function addCustomer (formData) {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesToken}`
      },
      body: JSON.stringify({
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        dni: formData.dni
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