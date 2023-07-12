const urlname = document.getElementById('context')
const names = urlname.textContent.toLowerCase();
const urlapi = "https://api.genshin.dev/characters/"
const url = urlapi+names
fetch(url)
    .then(det => det.json())
    .then(det => {
        const container = document.getElementById('detail')
        const image = document.getElementById('img')
        const img = document.createElement('img')
        img.style.width = "36rem"
        const desc = document.getElementById('desc')
        desc.textContent = det.description
        const na = document.getElementById('na')
        na.textContent = det.skillTalents[0].name
        const e = document.getElementById('e')
        e.textContent = det.skillTalents[1].name
        const q = document.getElementById('q')
        q.textContent = det.skillTalents[2].name
        const nad = document.getElementById('nad')
        nad.textContent = det.skillTalents[0].description
        const ed = document.getElementById('ed')
        ed.textContent = det.skillTalents[1].description
        const qd = document.getElementById('qd')
        qd.textContent = det.skillTalents[2].description

        img.src = "https://api.genshin.dev/characters/"+names+"/gacha-splash"
        image.appendChild(img)
        
    })
