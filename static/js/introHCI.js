"use strict";

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#testjs").click(function(e) {
        $(".jumbotron h1").text("Javascript is here");
        $(".jumbotron h1").addClass("active");
        $("#testjs").text("Please wait.........");
    });

    // Add any additional listeners here
    // example: $("#div-id").click(functionToCall);
     const projectClicked = function (e) {
        e.preventDefault();
        const closestProject = $(this).closest(".project");

        const projectDescription = $(closestProject).find(".project-description");

        if (projectDescription.length === 0) {
            $(closestProject).append(
                "<div class='project-description'><p>This project description</p></div>"
            );
        } else {
            $(projectDescription).fadeToggle();
        }
    }

    $(".project").click(projectClicked);
}
