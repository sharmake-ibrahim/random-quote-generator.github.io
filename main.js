

function component() {

    const content = {
        TextONe: ' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus mollitia consectetur, laboriosam "',
        TextTwo: " ~ Sharma",
        Btntext: " Get Quote"
    }

    

    const container = document.createElement('div')
    const section = document.createElement('section')
    const quoteText = document.createElement('p')
    const Author = document.createElement("h2")
    const getQuote = document.createElement('button')

    container.appendChild(section)
    section.appendChild(quoteText)
    section.appendChild(Author)
    section.appendChild(getQuote)
    
    container.classList.add('container')
    quoteText.textContent = `${content.TextONe}`
    Author.textContent = `${content.TextTwo}`
    getQuote.textContent = `${content.Btntext}`

    const Api = "https://api.quotable.io/random";
        async function fetchData() {

            try{

                const response = await fetch(`${Api}`);
                const data = await response.json();
                console.log(data);

                quoteText.textContent = `${data.content}`; 
                Author.textContent = `${data.author}`;

            }
            catch(error) {
                console.error(error)
            }
        }

        getQuote.addEventListener('click',  fetchData);
        fetchData()


    return container;
}

const Body = document.querySelector('body');
Body.appendChild( component());
console.log(Body)