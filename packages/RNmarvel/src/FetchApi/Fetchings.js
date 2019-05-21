import md5 from 'js-md5'
import axios from 'axios'

export const FetchReq = async (offset) => {
    const PUBLIC_KEY = '33a6c5428a583acce6b0b321d4fe8405'
    const PRIVATE_KEY = 'e053914ab24d6c89bfc90feacf1a68aff8851ca9'
    const timestamp = new Date()
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

    //fetch
    try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?offset=${offset}&ts=${timestamp}&orderBy=name&limit=${30}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        //  console.log(responseJson.data.total)
        return responseJson.data.results
    } catch (error) {
        console.log(error)
    }
    
     
}