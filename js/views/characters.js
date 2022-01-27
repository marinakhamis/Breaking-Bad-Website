
fetch("https://breakingbadapi.com/api/characters")
    .then((response) => {
        return response.json()
    })
    .then((data) => { return data; })
    .then((data) => {
        console.log(data[1].occupation[0])
        const characters = document.getElementById("characters")
        for (const e of data) {
            let character = document.createElement("div");
            character.classList = "character";
            character.innerHTML = `
            <button type="button" class="more" name="btn-${e.char_id}"> <i class="fas fa-bars"></i> </button>
            <img class="char-img"
                src="${e.img}">
            <div class="char-info">
                <p class="char-name"> ${e.name}</p>
                <p class="char-actor"> <i class="fas fa-star" style="color: rgb(255, 251, 0);"></i> <span
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
            
            `
            characters.append(character)
        }

        // Show/ Hide character info on click
        const btns = document.querySelectorAll('.more')
        console.log(btns.length)
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
    })




