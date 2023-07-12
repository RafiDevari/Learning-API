const urlname = document.getElementById('context')
const names = urlname.textContent.toLowerCase();
const urlapi = "https://api.genshin.dev/"+document.getElementById("jenisnya").textContent+"/"
const url = urlapi+names
fetch(url)
    .then(det => det.json())
    .then(det => {
        if (document.getElementById("jenisnya").textContent=="characters") {
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
        
        }

        else if (document.getElementById("jenisnya").textContent=="artifacts") {
            const container = document.getElementById('detailart')
            const image = document.getElementById('imgs')
            const img = document.createElement('img')
            img.style.width = "24rem"
            const na = document.getElementById('pc2')
            na.textContent = det["2-piece_bonus"]
            const e = document.getElementById('pc4')
            e.textContent = det["4-piece_bonus"]
            img.src = "https://api.genshin.dev/artifacts/"+names+"/circlet-of-logos"
            image.appendChild(img)
        
        }

        else if (document.getElementById("jenisnya").textContent=="enemies") {
            
        }
        
    })
