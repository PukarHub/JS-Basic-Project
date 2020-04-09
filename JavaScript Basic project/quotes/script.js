const quotes = [
    {
        name: 'Pukar Upreti',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name: 'Sam Arnold',
        quote: 'Those who dare to fall miserably can achieve greatly.'
    },
    {
        name: 'Poudel Jhayass',
        quote: 'Girls have a good sense of vision.'
    },
    {
        name: 'Lera kera',
        quote: 'kera is kola.'
    },
    {
        name: 'Topendra ',
        quote: 'Weed is the secret of my energy.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () 
{
    let number= Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}