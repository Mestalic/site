

(function() {
    const threshold = 500;

    // Function to check if DevTools is open
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            window.location = 'about:blank';
        }
    }

    // Check repeatedly at an interval
    setInterval(detectDevTools, 12);

    // Detect F12 and Ctrl+Shift+I key presses
    document.onkeydown = function(e) {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
            window.location = 'about:blank';
        }

        // Prevent Ctrl+C, Ctrl+V, Ctrl+U, Ctrl+Shift+I
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 73)) {
            return false;
        }
    };

    // Prevent Shift+Right Click and Middle Click
    document.onmousedown = function(e) {
        if ((e.shiftKey && (e.button === 2 || e.button === 3)) || (e.button === 2 || e.button === 3)) {
            oncontextmenu = "return false";
            return false;
        }
    };

    document.oncontextmenu = function() {
        return false;
    };

    function check() {
        if (document.body.addEventListener) {
            document.body.addEventListener('DOMMouseScroll', stop, false);
        }
        document.body.onmousewheel = stop;
    }

    function stop(e) {
        if (!e) {
            e = window.event;
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }

    check();

    // Function to go fullscreen
    function goFullscreen() {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    }

    // Add event listener to detect any click
    document.addEventListener('click', goFullscreen, { once: true });

})();
