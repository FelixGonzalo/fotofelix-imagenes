import {API_URL} from '../settings'

export default async function getCustomers () {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch( `${API_URL}/clients`, {
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

export async function getCustomersByFilter (formData) {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch( `${API_URL}/clients/search?phone=${formData.phone}&firstname=${formData.firstname}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesToken}`
      }
    });
    console.log("este es")
    const data = await res.json();
    if (Array.isArray(data)) return data
    return []
  } catch (error) {
    console.log('service error', error)
    throw new Error(error)
  }
}

export async function getCustomerById (customerId) {
  try {
    const accesToken = localStorage.getItem('accesToken')
    const res = await fetch( `${API_URL}/clients/search/${customerId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesToken}`
      }
    });
    const data = await res.json();
    return data
  } catch (error) {
    console.log('service error', error)
    throw new Error(error)
  }
}