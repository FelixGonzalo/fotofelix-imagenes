import {API_URL} from '../settings'

export default async function addImage (formData) {
  try {
    console.log("addImageWithFile iniciando", formData)

    // add file
    var myFormData = new FormData();
    myFormData.append("file", formData.imgfile);
    const res = await fetch(`${API_URL}/files/upload`, {
      method: 'POST',
      body: myFormData
    });
    const data = await res.json();
    if (!res.ok && data.data.file.length < 2) throw new Error('Response is NOT ok')

    const imgResult = await data.data.file

    // add image with result
    console.log("addImageWithFile iniciando paso 2", formData)

    const resTwo = await fetch(`${API_URL}/images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        imgUrl: imgResult,
        category: {
          id: formData.categoryId
        },
        client: {
          id: formData.clientId
        }
      })
    });
    const dataTwo = await resTwo.json();
    console.log("dataTwo", dataTwo)
    if (!resTwo.ok ) throw new Error('Response is NOT ok')

    return dataTwo;
  } catch (error) {
    console.log('service error', error)
    throw new Error(error)
  }
}