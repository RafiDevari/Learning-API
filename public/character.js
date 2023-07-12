fetch("https://api.genshin.dev/characters")
    .then(data => data.json())
    .then(char => {
        const container = document.getElementById('character')
        char.forEach(element => {
            url="https://api.genshin.dev/characters/"+element
            fetch(url)
                .then(chara => chara.json())
                .then(chara=>{

                    const name = document.createElement('h5')
                    const desc = document.createElement('p')
                    const link = document.createElement('a')

                    const card_body = document.createElement('div')
                    const img = document.createElement('img')

                    const card = document.createElement('div')

                    name.classList.add('card-title')
                    name.textContent = chara.name
                    desc.classList.add('card-text')
                    desc.textContent = chara.description
                    link.classList.add('btn')
                    link.classList.add('btn-primary')
                    link.textContent = "READ MORE..."
                    link.href = "/character/"+chara.name

                    card_body.classList.add('card-body')
                    img.classList.add('card-img-top')
                    img.src = "https://api.genshin.dev/characters/"+element+"/card"

                    card.classList.add('card')
                    card.classList.add('mt-lg-5')
                    card.style.width = "20rem"

                    card_body.appendChild(name)
                    card_body.appendChild(desc)
                    card_body.appendChild(link)
                    
                    card.appendChild(img)
                    card.appendChild(card_body)
                    container.appendChild(card)

            
                })
        });
    })



    