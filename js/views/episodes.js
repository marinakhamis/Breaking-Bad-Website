


fetch("https://www.breakingbadapi.com/api/episodes")
    .then((res) => { return res.json() })
    .then((data) => {
        let episodes = data
            // only keep the Breaking Bad episodes
            //Because the API has another series
            .filter((episode) => episode.series === "Breaking Bad")
        console.log(episodes)

        return episodes;
    })
    .then((episodes) => {
        episodes.forEach(e => {
            if (e.season === "1") {
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
        });
    })

function addEpisodes(e, x) {
    // e => episode
    // x => season number
    const episodeCard = document.createElement("div");
    episodeCard.className = "episode";
    episodeCard.innerHTML =
        `
    <div class="episode-info">
        <p class="episode-num"> <b id="episode-num"> ${e.episode} </b> </p>
        <h3 class="episode-title" id="episode-title"> ${e.title} </h3>
        <p class="air_date"> ${e.air_date}</p>
    </div>
    `
    document.getElementById(`season-${x}`).append(episodeCard);
}



