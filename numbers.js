const URL = 'http://numbersapi.com'

axios.get(`${URL}/3?json`)
    .then(response=>console.log(response.data))

axios.get(`${URL}/1,2,3,4?json`)
    .then(response=>console.log(response.data))

const favNumbers = [15,21,30,99]
const promises = []

favNumbers.forEach( number => (
    promises.push(
        axios.get(`${URL}/${number}`)
    )
))

Promise.all(promises)
    .then(array => (
        array.forEach( p => console.log(p.data))
    ))

