$(document).ready(() => {
    let contentWidth = $("#sidebar .content").innerWidth();

    $("#openButton").on("click", () => {
        $("#sidebar").animate({ left: 0 }, 800);
    })

    $("#closeButton i").on("click", () => {
        $("#sidebar").animate({ left: `-${contentWidth}` }, 800);
    })

    $("#singerSection div:first").css("display", "block");

    $("#singerSection h2").on("click", (e) => {
        $(e.target).next().slideToggle(500);
        $("#singerSection div").not($(e.target).next()).slideUp(500);
    })

    let countDownDate = new Date("18 mar, 2024 00:00:00").getTime();
    let interval = setInterval(function () {
        let timeNow = new Date().getTime();
        let difference = countDownDate - timeNow;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
    }, 1000)

    $("#message").on("keyup", (e) => {
        let value = e.target.value;
        let charCount = value.length;
        let maxChars = $("#message").attr("data-max-characters");
        let remaining = maxChars - charCount;
        if (charCount > maxChars) {
            e.target.value = value.substr(0, maxChars);
            return;
        }
        $("#charactersRemaining").html(`${remaining}`);
    })

    $(".links a").on("click", (e) => {
        let clickedLink = $(e.target).attr('href');
        let sectionTop = $(clickedLink).offset().top;
        $("html,body").animate({ scrollTop: sectionTop }, 1000);
    })

});


