fetch("https://www.breakingbadapi.com/api/episodes")
    .then((res) => { return res.json() })
    .then((episodes) => { return episodes })
    .then((episodes) => {
        // Stroing all episodes in an array called "Seasons"
        // So we can filter the seasons from episodes
        let seasons = episodes
            // only keep the Breaking Bad episodes
            //Because the API has another series
            .filter((episode) => episode.series === "Breaking Bad")
            .filter((episode) => episode.season)
            //convert those episode objects to their season value
            .map((episode) => episode.season)
        return seasons;
    })
    .then((seasons) => {
        // This part of code isn't really important
        // I could've done it using plain html
        // But I wanted to practice on array methods
        //Remove duplicated seasons
        const deSeason = [...new Set(seasons)];
        // console.log(deSeason); // [1, 2, 3, 4, 5]
        const seasonsArr = [];
        for (let s = 1; s < deSeason.length; s++) {
            let season = document.getElementById("season");
            let sNum = document.createElement("input");
            sNum.type = "button";
            sNum.classList = `season season-${s}`
            sNum.name = `season-${s}`;
            sNum.value = `Season ${s}`;
            season.append(sNum);
            seasonsArr.push(s);

        }

        const btns = document.querySelectorAll('input')
        btns.forEach(btn => {
            btn.addEventListener('click', function showSeason() {
                var vis = document.querySelector('.episodes-show'),
                    season = document.getElementById(this.name);
                if (vis !== null) {
                    vis.className = 'episodes-hide';
                }
                if (season !== null) {
                    season.className = 'episodes-show';
                }
            })

        });
        return seasonsArr;
    })




// To top button
var mybutton = document.getElementById("to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}