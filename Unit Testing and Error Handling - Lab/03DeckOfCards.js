function deck(cards) {
    let result = [];

    for (const cardElement of cards) {
        const card = cardElement.slice(0, -1);
        const suit = cardElement.slice(-1);
        try {
            result.push(solve(card, suit));
        } catch (err) {
            result = ['Invalid card: ' + card + suit];
        }
    }

    function solve(card, suit) {
        let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        if (cards.indexOf(card) == -1) {
            throw new Error('Invalid face' + card)
        }
        if (suits[suit] == undefined) {
            throw new Error('Invalid suit' + suit)
        }

        return {
            card, suit: suits[suit], toString() {
                return this.card + this.suit;
            }
        }.toString();
    }

    console.log(result.join(' '));
}

deck(['AS', '10D', 'KH', '2C']);
deck(['5S', '3D', 'QD', '1C']);
deck(['5S', '3D', 'QD', '6Y']);