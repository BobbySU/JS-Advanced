function solve(input, parameter) {

    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

        static sortBy(a, b) {
            if (parameter == 'price') {
                return a.price - b.price;
            } else {
                return a[parameter].localeCompare(b[parameter]);
            }
        }
    }

    for (const el of input) {
        let [ticketDestination, ticketPrice, ticketStatus] = el.split('|');
        let newTicket = new Ticket(ticketDestination, ticketPrice, ticketStatus);
        tickets.push(newTicket);
    }

    tickets.sort(Ticket.sortBy);
    return tickets;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
))

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
))