//검색
$(document).ready(function () {
  $(".search_icon, .m_search_icon").on("click", function () {
    // 검색 아이콘 클릭
    $(".search_icon, .m_search_icon").hide();
    $(".search_close_icon, .m_search_close_icon").show();
    $(".search_dimmed, .search_bg, .search_contents").show();
    $("html, body").css({ overflow: "hidden" });
    $(".container").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".search_close_icon, .m_search_close_icon").on("click", function () {
    // 검색 닫기 클릭
    $(".search_close_icon, .m_search_close_icon").hide();
    $(".search_icon, .m_search_icon").show();
    $(".search_dimmed, .search_bg, .search_contents").hide();
    $("html, body").css({ overflow: "auto", height: "100%" });
    $(".container").off("scroll touchmove mousewheel");
  });
});

// 전체메뉴 모달창
$(function () {
  // 열기
  $(".menu_icon, .m_menu_icon").click(function () {
    $(".modal_bg").fadeIn(200);
    $("#all_menu_wrapper").addClass("active");
  });
  // 닫기
  $(".all_menu_close").click(function () {
    $(".modal_bg").fadeOut(200);
    $("#all_menu_wrapper").removeClass("active");
  });
  // 전체메뉴 모달창 탭메뉴
  $(".tab_nav .all_menu_tab li.on a").attr("title", "현재 선택 탭");
  $(".tab_nav .all_menu_tab a").click(function () {
    var i = $(this).parent("li").index();
    $(this)
      .parent("li")
      .siblings("li")
      .removeClass("on")
      .find("a")
      .removeAttr("title");
    $(this).parent("li").addClass("on").find("a").attr("title", "현재 선택 탭");
    $(".all_menu_list").find(".on").removeClass("on");
    $(".all_menu_list").find(".dep1").eq(i).addClass("on");
    return false;
  });
  //dep3
  $(".all_menu_list .dep3 > a").click(function () {
    var a = $(this).parent(".dep3");
    if (a.hasClass("on")) {
      $(this).text("메뉴 열기");
      a.removeClass("on");
    } else {
      $(this).text("메뉴 닫기");
      a.addClass("on");
    }
    return false;
  });
  // 모달창 오픈시 스크롤 방지
  $("html, body").css({ overflow: "hidden" });
  $("#all_menu_wrapper").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
  $("html, body").css({ overflow: "auto", height: "100%" });
  $("#all_menu_wrapper").off("scroll touchmove mousewheel");
});

// main swiper
$(document).ready(function () {
  var mainSwiper = new Swiper("#swiper1", {
    pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });
  // 재생, 일시정지 버튼
  $(".start").on("click", function () {
    mainSwiper.autoplay.start();
    $(".start").hide();
    $(".stop").show();
    return false;
  });
  $(".stop").on("click", function () {
    mainSwiper.autoplay.stop();
    $(".stop").hide();
    $(".start").show();
    return false;
  });
  // 첫화면에 일시정지 버튼 보이기
  $(document).ready(function () {
    $(".start").hide();
    $(".stop").show();
  });

  //event swiper
  $(document).ready(function () {
    var swiper_ev = new Swiper(".swiper_ev", {
      pagination: {
        el: ".swiper-pagination-ev",
        type: "fraction",
      },
      navigation: {
        nextEl: ".ev-button-next",
        prevEl: ".ev-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
    });
    $(".start").on("click", function () {
      swiper_ev.autoplay.start();
      $(".start").hide();
      $(".stop").show();
      return false;
    });
    $(".stop").on("click", function () {
      swiper_ev.autoplay.stop();
      $(".stop").hide();
      $(".start").show();
      return false;
    });

    $(document).ready(function () {
      $(".start").hide();
      $(".stop").show();
    });
  });

  // 탭 메뉴
  $(document).ready(function () {
    // 카드
    $("ul.card_tabs li").click(function () {
      var tab_id1 = $(this).attr("card-data-tab");

      $("ul.card_tabs li").removeClass("current");
      $(".card_tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id1).addClass("current");
    });
    // 금융
    $("ul.finance_tabs li").click(function () {
      var tab_id2 = $(this).attr("finance-data-tab");

      $("ul.finance_tabs li").removeClass("current");
      $(".finance_tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id2).addClass("current");
    });
    // 공지사항, 소비자주의경보
    $("ul.tabs li").click(function () {
      var tab_id3 = $(this).attr("data-tab");

      $("ul.tabs li").removeClass("current");
      $(".tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id3).addClass("current");
    });
  });

  // 반응형 모바일 lifestyle life_nav 드래그 슬라이드
  var swiper = null;

  $(window).resize(function () {
    if ($(this).width() <= 1024 && $(this).width() > 479 && !swiper) {
      swiper = new Swiper("#swiper2", {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          prevEl: ".swiper-button-prev2",
          nextEl: ".swiper-button-next2",
        },
        autoplay: false,
      });
    } else if ($(this).width() <= 479 && !swiper) {
      swiper = new Swiper("#swiper2", {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          prevEl: ".swiper-button-prev2",
          nextEl: ".swiper-button-next2",
        },
        autoplay: false,
      });
    } else if ($(this).width() > 1024 && swiper) {
      swiper.destroy();
      swiper = null;
    }
  });

  $(window).trigger("resize");
});
