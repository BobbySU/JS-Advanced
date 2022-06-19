function solve(card, suit) {
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (cards.indexOf(card) == -1) {
        throw new Error('Invalid face' + card)
    }
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    return {
        card, suit: suits[suit], toString() {
            return this.card + this.suit;
        }
    }.toString();
}

console.log(solve('A', 'S'));
console.log(solve('10', 'H'));
console.log(solve('1', 'C'));