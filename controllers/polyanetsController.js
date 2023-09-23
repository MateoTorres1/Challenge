const axios = require('axios')

class polyanetsController {

    create = async(data) => {
        const header = {"Content-Type": "application/json"}
        try {
            const response = await axios.post('https://challenge.crossmint.io/api/polyanets', data, {header});
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    delete = async(data) => {
        try {
            const response = await axios.delete('https://challenge.crossmint.io/api/polyanets', {data: data});
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = polyanetsController