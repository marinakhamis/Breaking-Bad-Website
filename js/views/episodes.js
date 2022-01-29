fetch("https://www.breakingbadapi.com/api/episodes")
    .then((res) => { return res.json() })
    .then((data) => {
        let episodes = data
            // only keep the Breaking Bad episodes
            //Because the API has another series
            .filter((episode) => episode.series === "Breaking Bad")
        return episodes;

    })
    .then((episodes) => {
        episodes.forEach(e => {
            if (e.season === "1" || e.season === " 1") {
                //Season 1
                addEpisodes(e, 1);
            } else if (e.season === "2") {
                //Season 2
                addEpisodes(e, 2);

            } else if (e.season === "3") {
                //Season 3
                addEpisodes(e, 3);

            } else if (e.season === "4") {
                //Season 4
                addEpisodes(e, 4);

            } else {
                //Season 5
                addEpisodes(e, 5);
            }
            // To append all episodes in the "ALL" btn
            if (e.season != null) {
                addEpisodes(e, 0);
            }
        });
    })
    .then(() => {
        const all = document.getElementById("season-0");
        const showMoreBtn = document.createElement("button");
        const showMoreWrap = document.createElement("div");
        showMoreBtn.id = "show-more"
        showMoreBtn.className = "show-more"
        showMoreBtn.innerText = "Show more"
        showMoreWrap.className = "show-more-wrap"
        showMoreWrap.appendChild(showMoreBtn)
        all.appendChild(showMoreWrap)
    })
    .then(() => {
        const loadmore = document.querySelector('#show-more');
        let currentEpisodes = 0;
        loadmore.addEventListener('click', (e) => {
            const episodesList = [...document.querySelectorAll('#season-0 .episode')];
            for (let i = currentEpisodes; i < currentEpisodes + 9; i++) {
                if (episodesList[i]) {
                    episodesList[i].style.display = 'block';
                }
            }
            currentEpisodes += 10;

            // Load more button will be hidden after list fully loaded
            if (currentEpisodes >= episodesList.length) {
                event.target.style.display = 'none';
            }
        })

    })

function addEpisodes(e, x) {
    // e => episode
    // x => season number
    const episodeCard = document.createElement("div");
    episodeCard.className = "episode";
    episodeCard.innerHTML =
        `
        <p class="epi_num"> #${e.episode_id} </p>
    <div class="episode-info">
        <p class="episode-num"> <i class="fas fa-flask"></i> <b id="season-num"> s${e.season}. </b><b id="episode-num">e${e.episode} </b> </p>
        <h3 class="episode-title" id="episode-title"> ${e.title} </h3>
        <p class="air_date"> ${e.air_date}</p>
    </div>
    `
    document.getElementById(`season-${x}`).append(episodeCard);

}





