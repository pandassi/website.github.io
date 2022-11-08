$(document).ready(function() {
    $(".block").slice(0, 6).show();
    if ($(".block:hidden").length != 0) {
        $("#load").show();
    }
    $("#load").on("click", function(e) {
        e.preventDefault();
        $(".block:hidden").slice(0, 6).slideDown();
        if ($(".block:hidden").length == 0) {
            $("#load").text("No more!").fadOut("slow");
        }
    });
}) 