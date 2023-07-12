const urlname = document.getElementById('context')
const names = urlname.textContent.toLowerCase();
const urlapi = "https://api.genshin.dev/characters/"
const url = urlapi+names
fetch(url)
    .then(det => det.json())
    .then(det => {
        const container = document.getElementById('detail')
        const img = document.createElement('img')
        const desc = document.getElementById('desc')
        const na = document.getElementById('na')
        const e = document.getElementById('e')
        const q = document.getElementById('q')
        const nad = document.getElementById('nad')
        const ed = document.getElementById('ed')
        const qd = document.getElementById('qd')

        img.src = "https://api.genshin.dev/characters/"+names+"/card"
        container.appendChild(img)
        
    })
