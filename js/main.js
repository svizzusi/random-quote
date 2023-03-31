const quotes = [
    {
        id: 1,
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: 'Robert Frost',
        image: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 2,
        quote: "The purpose of our lives is to be happy.",
        author: 'Dalai Lama',
        image: 'https://images.pexels.com/photos/220578/pexels-photo-220578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 3,
        quote: "Life is a succession of lessons which must be lived to be understood.",
        author: 'Helen Keller',
        image:'https://images.pexels.com/photos/1786244/pexels-photo-1786244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 4,
        quote: "Life is really simple, but we insist on making it complicated.",
        author: 'Confucius',
        image: 'https://images.pexels.com/photos/6441839/pexels-photo-6441839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 5,
        quote: "The biggest adventure you can ever take is to live the life of your dreams.",
        author: 'Oprah Winfrey',
        image: 'https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 6,
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: 'Albert Einstein',
        image: 'https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 7,
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: 'Charles R. Swindoll',
        image: 'https://images.pexels.com/photos/16211568/pexels-photo-16211568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 8,
        quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
        author: 'Eleanor Roosevelt',
        image: 'https://images.pexels.com/photos/5231290/pexels-photo-5231290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 9,
        quote: "Life is a precious gift. Don't waste it being unhappy, dissatisfied, or anything else you can be.",
        author: 'Unknown',
        image: 'https://images.pexels.com/photos/1559285/pexels-photo-1559285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 10,
        quote: "Life is a journey, and if you fall in love with the journey, you will be in love forever.",
        author: 'Peter Hagerty',
        image: 'https://images.pexels.com/photos/9818108/pexels-photo-9818108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]

let button = document.querySelector('#button')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')
let image = document.querySelector('#image')

quote.innerText = '" ' + quotes[0].quote + ' "'
author.innerText = '~ ' + quotes[0].author
image.src = quotes[0].image

button.addEventListener('click', function () {
    const random = Math.floor(Math.random() * quotes.length)
    quote.innerText = '" ' + quotes[random].quote + ' "'
    author.innerText = '~ ' + quotes[random].author
    image.src = quotes[random].image
});