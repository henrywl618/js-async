const URL = 'http://numbersapi.com'

async function getFact(){
    const resp1 = await axios.get(`${URL}/3?json`)
    console.log(resp1.data)

    const resp2 = await axios.get(`${URL}/1,2,3,4?json`)
    console.log(resp2.data)

};

async function getRepeatedFacts(){
    const facts= [];

    for (let i=0; i<4; i++){
        const resp = await axios.get(`${URL}/4`)
        facts.push(resp.data)
    }

    facts.forEach(fact => console.log(fact))
}

getFact();
getRepeatedFacts();
