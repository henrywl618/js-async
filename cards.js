const deckID = 'qo1cmqdpgsj5'

// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    .then(response => console.log(response.data.cards[0].value, 'of', response.data.cards[0].suit))


// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.
// Once you have both cards, console.log the values and suits of both cards.
const cards = []
axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then(response => {
        const deckId = response.data.deck_id
        cards.push(response.data.cards[0])
        return axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    })
    .then(response => {
        cards.push(response.data.cards[0])
        cards.forEach(card => console.log(`${card.value} of ${card.suit}`))
    })

// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

