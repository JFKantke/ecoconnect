$(document).ready(function () {
    "use strict";

    // Display rotating eco-tips
    var ecoTips = [
        "Reduce, reuse, recycle!",
        "Choose sustainable products.",
        "Conserve energy and water daily.",
        "Support local and organic farming.",
        "Plant a tree and go green!"
    ];
    var currentTip = 0;

    function showNextTip() {
        $("#eco-tip").text(ecoTips[currentTip]);
        currentTip = (currentTip + 1) % ecoTips.length;
    }

    setInterval(showNextTip, 4000); // Change tip every 4 seconds
    showNextTip();
});
