$(function () {
    //메뉴
    $("nav>ul>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown()
    })

    $("nav>ul>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp()
    })

    //메뉴키보드

    $("nav>ul>li").focusin(function () {
        $(this).children(".sub").stop().slideDown()
        $(this).addClass("on")
    })

    $("nav li li:last-child").focusout(function () {
        $(".sub").stop().slideUp()
        $("nav>ul>li").removeClass("on")
    })

    //슬라이드
    function slide() {
        $(".slide ul").animate({ top: "-100%" }, 1000, function () {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({ top: 0 })
        })
    }

    setInterval(slide, 2000)


    //팝업
    $(".pp").click(function () {
        $(".popup").show()
        return false;
    })

    $(".button").click(function () {
        $(".popup").hide()
    })
})