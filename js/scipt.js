$(document).ready(function() {
  // href 속성이 '#'인 모든 'a' 태그에 대해 클릭 이벤트 추가
  $('a[href="#"]').click(function (event) {
    // 기본 동작인 페이지 이동을 방지
    event.preventDefault();
});
$('.product_list > li > a').on('click', function(e) {
    e.preventDefault();
})
// 첫 번째 탭을 기본적으로 활성화
$('section > ul > li a.p_01').addClass('active');
$('.product01').show();
$('.product02, .product03').hide();

// 공통 함수로 탭 전환 처리
$('section > ul > li a').on('click', function () {
    // 모든 탭의 'active' 클래스 제거
    $('section > ul > li a').removeClass('active');
    // 클릭한 탭에 'active' 클래스 추가
    $(this).addClass('active');
    
    // 모든 제품 리스트 숨기기
    $('.product_wrap ul').hide();
    
    // 클릭된 탭에 해당하는 제품 리스트만 보이기
    var targetClass = $(this).attr('class').split(' ')[0]; // p_01, p_02, p_03 등 클래스 값 가져오기
    $('.product' + targetClass.substring(2)).fadeIn(); // product01, product02, product03에 해당하는 리스트 보이기
});



$('.btn_close').on('click', function () {
    $('.skip_event').fadeOut()
    $('header').animate({
        top: 0
    })
})

$('.family_site > a').on('click', function () {
    $(this).toggleClass('on');
    $('.family_site > span').toggleClass('on');
})


$('.menu').on('click', function () {
    $('.sub_menu').fadeToggle()
    $('.sub_menu .menu').toggleClass('active')
    $('.header_area').toggleClass('active')
})

$(window).scroll(function(){
    if ($(window).scrollTop() >= 60) {
        $('header').addClass('fixed-header');
     }
     else {
        $('header').removeClass('fixed-header');
     }
})
});










var swiper = new Swiper(".rbfy_visual", {
    scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 100,
        hide: false,
    },
});
 var swiper = new Swiper(".rbfy_visual2", {
    slidesPerView: 3.8,
    spaceBetween: 0,
    grabCursor: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    loop: true
});
