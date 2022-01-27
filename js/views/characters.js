
// fetch("https://breakingbadapi.com/api/characters")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => { return data; })
//     .then((data) => {
//         for (const ele of data) {
//             console.log(ele.name)
//         }
//     })





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