import {API_URL} from '../settings'

export default async function addFile (formData) {
  try {
    const res = await fetch(`${API_URL}/files/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        file: formData.file
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

export async function addFileData (formData) {
  try {
    const res = await fetch(`${API_URL}/images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        imgUrl: formData.imgUrl,
        category: {
          id: formData.categoryId
        },
        client: {
          id: formData.clientId
        }
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
