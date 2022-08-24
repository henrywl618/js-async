let deckID = "";
const button = $('button');
const container = $('.imageContainer');

// On document load, create and shuffle a new deck
$(async ()=>{
    try{
        const resp = await axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
        deckID = resp.data.deck_id;
    }
    catch(err){
        console.log(err)
    }
});

const randDegree = ()=>{
    return 360 * Math.random()
}


button.on("click", async ()=>{

    try{
        const resp = await axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
        const data = resp.data;

        if (data.success === true){
            const card = $(`<img src=${data.cards[0].image} style="transform:rotate(${randDegree()}deg);"></img>`)
            container.append(card)
        }
        else{
            alert("Not enough cards remaining to draw 1 additional")
        }
    }
    catch(err){
        console.log(err)
    }
})