$(function() {
    $(window).scroll(function() {
        //250 넘으면 버튼 보임
        if ($(this).scrollTop() > 250) {
            $('#topbutton').fadeIn();
        }
        //아닐경우 버튼 안보임
        else {
            $('#topbutton').fadeOut();
        }
    });
    //버튼 클릭시
    $('#topbutton').click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});