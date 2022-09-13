const { default: axios } = require('axios')
const baseURL = 'https://como-fazer-rzm-default-rtdb.firebaseio.com/'

const list = async(key) => {

    const content = await axios.get( baseURL+key+'.json')
    if (content.data) {

        const objetos = Object
            .keys(content.data)
            .map(key => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })
      return objetos
    }
    return []
}

module.exports = {  
    list
}