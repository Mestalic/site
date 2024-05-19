"use strict";

$(document).ready(function () {
  // Function to type out and delete the title
  function typeAndDeleteTitle() {
    let docint = 0;
    const doctitle = document.title;

    // Function to type out the title
    function typeTitle() {
      const typeInterval = setInterval(() => {
        if (docint > doctitle.length) {
          clearInterval(typeInterval); // Stop typing when done
          setTimeout(deleteTitle, 1000); // Start deleting the title after a delay
          return;
        }
        const dotitle = doctitle.substring(0, docint);
        document.title = dotitle.trim() !== "" ? dotitle : "⁤";
        docint++;
      }, 431); // Adjust speed if needed
    }

    // Function to delete the title
    function deleteTitle() {
      const deleteInterval = setInterval(() => {
        if (docint < 0) {
          clearInterval(deleteInterval); // Stop deleting when done
          typeTitle(); // Call the function again to start typing again
          return;
        }
        const dotitle = doctitle.substring(0, docint);
        document.title = dotitle.trim() !== "" ? dotitle : "⁤";
        docint--;
      }, 230); // Adjust speed if needed
    }

    // Start typing the title
    typeTitle();
  }

  const getIPAddress = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://wtfismyip.com/json",
        dataType: "json",
        success: function(data) {
          resolve(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          reject(errorThrown);
        }
      });
    });
  }; 
  let Strings = [];
  getIPAddress().then(v => {
    Strings.push(`${v.YourFuckingCity}, ${v.YourFuckingCountry}`)
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
    fetchData().then(v => {
      for (var i = 0; i < v.general.strings.length; i++) {
        Strings.push(v.general.strings[i])
      }

      for (var i = v.general.strings.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = Strings[i];
        Strings[i] = Strings[j];
        Strings[j] = temp;
      }

      const backgroundvideo = document.getElementById("background-video");
      const backgroundmusic = document.getElementById("background-music");
      backgroundmusic.muted = false; backgroundmusic.volume = 0.35; backgroundmusic.currentTime = 0;
      backgroundvideo.muted = false; backgroundvideo.play(); backgroundvideo.currentTime = 0;
      const table = [{
        "selector": "#main-box",
        "animation": "slide-down"
      }, {
        "selector": "#button-1",
        "animation": "slide-right"
      }, {
        "selector": "#button-2",
        "animation": "slide-left"
      }, {
        "selector": "#button-3",
        "animation": "slide-up"
      }, {
        "selector": "#button-4",
        "animation": "slide-up"
      }, {
        "selector": "#button-5",
        "animation": "slide-up"
      }, {
        "selector": "#footer",
        "animation": "slide-up"
      }];
      table.forEach(({
        selector: _0x4cb137,
        animation: _0x3598a3
      }) => {
        $(_0x4cb137).addClass(_0x3598a3);
      });

      new Typed("#typed-text", {
        "strings": Strings,
        "typeSpeed": 0x54,
        "startDelay": 0x3,
        "backSpeed": 0x32,
        "loop": true,
        "showCursor": true,
        "cursorChar": "|",
        "autoInsertCss": false,
        "smartBackspace": true
      });
      const table2 = {};
      $("[data-tooltip]").each(function () {
        let _0x1742ec = 0x0;
        let _0x1febe8 = "bottom";
        if (["mute-button", "pause-button"].includes(this.id)) {
          _0x1febe8 = "top";
          _0x1742ec = 0x12c;
        };
        table2[this.id] = tippy(this, {
          "content": $(this).data("tooltip"),
          "allowHTML": false,
          "animateFill": true,
          "arrow": true,
          "delay": _0x1742ec,
          "followCursor": false,
          "hideOnClick": false,
          "inlinePositioning": true,
          "interactiveBorder": 0x2,
          "interactiveDebounce": 0x0,
          "maxWidth": "none",
          "placement": _0x1febe8,
          "touch": "hold",
          "animation": "shift-away",
          "onShow"(_0x400f82) {
            _0x400f82.popper.style.opacity = "0";
            requestAnimationFrame(() => {
              _0x400f82.popper.style.transition = "opacity 0.3s";
              _0x400f82.popper.style.opacity = "1";
            });
          },
          "onHide"(_0x5bf921) {
            _0x5bf921.popper.style.opacity = "0";
          }
        });
      });
      $("#discord-tool").click(function () {
        const discordToolTip = $(this).data("tooltip");
        navigator.clipboard.writeText(discordToolTip).then(() => {
          table2[this.id].setContent("Copied to Clipboard!");
        })["catch"](_0x13621e => table2[this.id].setContent("Failed to Copy to Clipboard!"))["finally"](() => {
          setTimeout(() => {
            table2[this.id].setContent(discordToolTip);
          }, 0xbb8);
        });
      });
      fetch(`assets/totalrefreshes.txt?cache=${Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join("")}`)
      .then(response => response.text())
      .then(data => {
        table2["view-tool"].setContent(data);
      })
      const mutebutton = $("#mute-button");
      backgroundmusic.play();
      mutebutton.click(function () {
        if (backgroundvideo.paused) return;
        backgroundmusic.muted = !backgroundmusic.muted;
        if (backgroundmusic.muted) {
          backgroundmusic.pause()
          mutebutton.removeClass("fa-volume-up").addClass("fa-volume-mute");
          table2[this.id].setContent("Unmute");
        } else {
          backgroundmusic.play()
          mutebutton.removeClass("fa-volume-mute").addClass("fa-volume-up");
          table2[this.id].setContent("Mute");
        };
      });
      const pausebutton = $("#pause-button");
      pausebutton.click(function () {
        if (backgroundvideo.paused) {
          backgroundvideo.play(); backgroundmusic.play()
          pausebutton.removeClass("fa-play").addClass("fa-pause");
          table2[this.id].setContent("Pause");
        } else {
          backgroundvideo.pause(); backgroundmusic.pause()
          pausebutton.removeClass("fa-pause").addClass("fa-play");
          pausebutton.data("tooltip", "Play");
          table2[this.id].setContent("Play");
        };
      });

      // Call the function to start typing and deleting the title
      typeAndDeleteTitle();
    });
  }).catch(error => {
    console.error("Error:", error);
  });
});
