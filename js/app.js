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
            .map((episode) => episode.season);
        return seasons;
    }).then((seasons) => {

        const deSeason = [...new Set(seasons)];
        console.log(deSeason); // [1, 2, 3, 4, 5]
    })


// fetch("https://www.breakingbadapi.com/api/episodes")
//     .then((res) => res.json())
//     .then((episodes) => {
//         // Take the array of episodes
//         const seasons = episodes
//             // and only keep the Breaking Bad episodes
//             .filter((episode) => episode.series === "Breaking Bad")
//             // and only keep the episodes with an affiliated season
//             .filter((episode) => episode.season)

//             // and convert those episode objects to their season value
//             .map((episode) => episode.season);
//             console.log(seasons)

//         // Do stuff with the seasons array
//     });


// const deduped = [...new Set(seasons)];
// console.log(deduped); // [1, 2, 3, 4, 6]

