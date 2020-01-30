$(document).ready(function() {
    /* Hamburger menu animation */
    $('.open-button').click(function(){
        $(this).toggleClass('open');
    });

    /* Menu fade/in out on mobile */
    $(".open-button").click(function(e){
        e.preventDefault();
        $(".mobile-menu").toggleClass('open');
    });


    //tabs
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
});
