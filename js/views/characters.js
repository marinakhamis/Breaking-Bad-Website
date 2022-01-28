// Implementing search 
const search = document.getElementById("char-search")
const characters = document.getElementById("characters")

window.addEventListener("load", () => {
    charactersData();
})

search.addEventListener("keyup", () => {
    let searchQuery = search.value;
    charactersData(searchQuery);
})


async function charactersData(query) {
    let res;
    if (query) {
        res = await fetch(`https://breakingbadapi.com/api/characters?name=${query}`);
    } else {
        res = await fetch("https://breakingbadapi.com/api/characters");
    }
    let results = await res.json();
    characters.innerHTML = "";
    results.map(e => {
        const character = `
        <div class="character"> 
            <button type="button" class="more" name="btn-${e.char_id}"> <i class="fas fa-bars"></i> </button>
            <img class="char-img"
                src="${e.img}">
            <div class="char-info">
                <p class="char-name"> ${e.name}</p>
                <p class="char-actor"> <i class="fas fa-star" style="color: #eec643;"></i> <span
                        class="char-portrayed"> ${e.portrayed}</span> </p>
            </div>

            <div class="char-hide" id="btn-${e.char_id}">
                <p class="char-name"> <i class="fas fa-info"></i> <span class="name">${e.name}</span>
                </p>
                <p> <i class="fas fa-signature"></i> <span class="nickname">${e.nickname} </span></p>
                <p> <i class="fas fa-user"></i> <span class="portrayed"> ${e.portrayed} </span></p>
                <p> <i class="fas fa-cogs"></i></i> <span class="occupation"> ${e.occupation[0]} </span></p>
                <p> <i class="fas fa-birthday-cake"></i> <span class="birthday"> ${e.birthday} </span> </p>
            </div>
        </div>
        `

        let searchOutput = document.createElement('div');
        searchOutput.innerHTML = character;
        characters.append(searchOutput)
    })


    // Show/ Hide character info on click
    const btns = document.querySelectorAll('.more')
    btns.forEach(btn => {
        btn.addEventListener('click', function showCharacter() {
            var vis = document.querySelector('.char-show'),
                character = document.getElementById(this.name);
            if (vis !== null) {
                vis.className = 'char-hide';
            }
            else if (character !== null) {
                character.className = 'char-show';
            } else {
                character.className = 'char-hide';

            }
        })
    })

}


// Loader
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};