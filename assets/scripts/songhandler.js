document.addEventListener("DOMContentLoaded", function () {
    let hasStarted = false; // Flag to track whether content has started playing

    async function fetchData() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "assets/storage.json",
                dataType: "json",
                success: function(data) {
                    resolve(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    reject(errorThrown);
                }
            });
        });
    }

    const video = document.getElementById("background-video");
    const music = document.getElementById("background-music");
    const savedpfp = document.getElementById("savedpfp");

    // Function to handle click event
    function handleClick() {
        if (!hasStarted) {
            hasStarted = true; // Set the flag to true once content starts playing

            fetchData().then(data => {
                const songUrls = data["songUrls"];
                const vidUrls = data["vidUrls"];

                // Choose random indexes for selecting URLs
                const randomIndex = Math.floor(Math.random() * vidUrls.length);

                // Choose a random video URL from the list
                const randomVideoUrl = vidUrls[randomIndex];
                if (randomVideoUrl) {
                    video.src = randomVideoUrl;
                    video.load();
                    video.play();
                }

                // Use the same index to select the corresponding song URL
                const randomSongUrl = songUrls[randomIndex];
                if (randomSongUrl) {
                    music.src = randomSongUrl;
                    music.load();
                    music.play();
                }

                // Update the profile picture source after fetching it from data
                savedpfp.src = data["general"]["pfp"];
            });

            // Mute the video initially
            video.volume = 0;
            video.muted = false;

            // Prevent entering picture in picture mode
            video.addEventListener("enterpictureinpicture", (event) => {
                event.preventDefault();
            });

            // Prevent context menu on right click
            video.addEventListener("contextmenu", (event) => {
                event.preventDefault();
            });

            // Your muteButton and pauseButton event listeners
            let muteButton = document.getElementById("mute-button");
            let pauseButton = document.getElementById("pause-button");
            setTimeout(() => {}, 5000);

            muteButton.addEventListener("click", function() {});
            pauseButton.addEventListener("click", function() {});
        }
    }

    // Add click event listener to the entire document
    document.addEventListener("click", handleClick);
});
