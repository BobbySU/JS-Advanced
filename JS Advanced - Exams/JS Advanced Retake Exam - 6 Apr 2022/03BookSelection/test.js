const {expect} = require('chai');
const {bookSelection} = require('./bookSelection');

describe('Test', () => {
    describe('isGenreSuitable', () => {
        it('test + Books are suitable', () => {
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horro', 20)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('H', 2)).to.equal(`Those books are suitable`);
        });

        it('test - Not suitable for kids', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
    });

    describe('isItAffordable', () => {
        it('test + Book bought', () => {
            expect(bookSelection.isItAffordable(10, 10)).to.equal('Book bought. You have 0$ left');
            expect(bookSelection.isItAffordable(10, 20)).to.equal('Book bought. You have 10$ left');
        });

        it('test - Don\'t have money', () => {
            expect(bookSelection.isItAffordable(12, 2)).to.equal('You don\'t have enough money');
        });
        it('test error', () => {
            expect(() => bookSelection.isItAffordable('h', 20)).to.throw();
            expect(() => bookSelection.isItAffordable('h', '20')).to.throw();
            expect(() => bookSelection.isItAffordable(true, 20)).to.throw();
            expect(() => bookSelection.isItAffordable(1, false)).to.throw();
        });
    });

    describe('suitableTitles', () => {
        it('test + Matched correctly', () => {
            const arr = [{title: 'a', genre: 'b'}, {title: 'aa', genre: 'b'}, {title: 'aaa', genre: 'a'}];
            expect(bookSelection.suitableTitles(arr, 'b')).to.deep.equal(['a', 'aa']);
            expect(bookSelection.suitableTitles(arr, 'a')).to.deep.equal(['aaa']);
        });

        it('test - Don\'t matched', () => {
            const arr = [{title: 'a', genre: 'b'}, {title: 'aa', genre: 'b'}, {title: 'aaa', genre: 'a'}];
            expect(bookSelection.suitableTitles(arr, 'c')).to.deep.equal([]);
        });

        it('test error', () => {
            expect(() => bookSelection.suitableTitles('h', 'yes')).to.throw();
            expect(() => bookSelection.suitableTitles([1, 2], 20)).to.throw();
            expect(() => bookSelection.suitableTitles(true, 'yes')).to.throw();
            expect(() => bookSelection.suitableTitles(['da', 'ne'], false)).to.throw();
        });
    });
});