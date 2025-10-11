/*
Special Thanks - noirsociety
Codepen URL - https://codepen.io/noirsociety/pen/BaGNrdz
*/

const magnet = document.querySelector(".magnet");
const cursor = document.querySelector(".magnet-cursor");
const circle = document.querySelector(".magnet-circle");
let [startX, startY, endX, endY] = [0, 0, 0, 0];
let time = 0.1;
let raf;

const lerp = (start, end, t) => start * (1 - t) + end * t;

function updateCircle() {
  startX = lerp(startX, endX, time);
  startY = lerp(startY, endY, time);
  circle.style.transform = `translate(${startX}px,${startY}px)`;
  raf = requestAnimationFrame(updateCircle);
  startX.toFixed(1) === endX.toFixed(1) && cancelAnimationFrame(raf);
}

function trackCircle(e) {
  endX = e.clientX - circle.clientWidth / 2;
  endY = e.clientY - circle.clientHeight / 2;
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(updateCircle);
}

function trackCursor(e) {
  cursor.style.setProperty("--x", `${e.clientX - cursor.clientWidth / 2}px`);
  cursor.style.setProperty("--y", `${e.clientY - cursor.clientHeight / 2}px`);
  magnet.classList.remove("reset");
}

function init(e) {
  trackCursor(e);
  trackCircle(e);
  return e.target.matches(".magnet-link") && magnet.classList.add("reset");
}

window.addEventListener("pointermove", init, false);
window.addEventListener("load", updateCircle, false);






!(function(a) {
    "use strict";
    var e;
    a(window).stellar({ responsive: !0, parallaxBackgrounds: !0, parallaxElements: !0, horizontalScrolling: !1, hideDistantElements: !1, scrollProperty: "scroll" }),
        a(".js-fullheight").css("height", a(window).height()),
        a(window).resize(function() {
            a(".js-fullheight").css("height", a(window).height());
        }),
        setTimeout(function() {
            a("#ftco-loader").length > 0 && a("#ftco-loader").removeClass("show");
        }, 1),
        a.Scrollax(),
        a("body").on("click", ".js-fh5co-nav-toggle", function(e) {
            e.preventDefault(), a("#ftco-nav").is(":visible") ? a(this).removeClass("active") : a(this).addClass("active");
        }),
        a(document).on("click", '#ftco-nav a[href^="#"]', function(e) {
            e.preventDefault(), a.attr(this, "href"), a("html, body").animate({ scrollTop: a(a.attr(this, "href")).offset().top - 70 }, 500, function() {});
        }),
        a(".home-slider").owlCarousel({
            loop: !0,
            autoplay: !1,
            margin: 0,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            nav: !1,
            autoplayHoverPause: !0,
            items: 1,
            navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
            responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
        }),
        a(".carousel-testimony").owlCarousel({
            center: !0,
            loop: !0,
            autoplay: !0,
            autoplaySpeed: 2e3,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: !1,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
        }),
        a(".carousel-projects").owlCarousel({
            center: !0,
            loop: !0,
            autoplay: !0,
            autoplaySpeed: 1e3,
            items: 1,
            pauseOnHover: !0,
            margin: 30,
            stagePadding: 0,
            dots: false,
            nav: true,
            navText: ["<", ">"],
            responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
        }),
        a("nav .dropdown").hover(
            function() {
                var e = a(this);
                e.addClass("show"), e.find("> a").attr("aria-expanded", !0), e.find(".dropdown-menu").addClass("show");
            },
            function() {
                var e = a(this);
                e.removeClass("show"), e.find("> a").attr("aria-expanded", !1), e.find(".dropdown-menu").removeClass("show");
            }
        ),
        a("#dropdown04").on("show.bs.dropdown", function() {
            console.log("show");
        }),
        a(window).scroll(function() {
            var e = a(this).scrollTop(),
                s = a(".ftco_navbar"),
                t = a(".js-scroll-wrap");
            e > 150 && !s.hasClass("scrolled") && s.addClass("scrolled"),
                e < 150 && s.hasClass("scrolled") && s.removeClass("scrolled sleep"),
                e > 350 && (s.hasClass("awake") || s.addClass("awake"), t.length > 0 && t.addClass("sleep")),
                e < 350 && (s.hasClass("awake") && (s.removeClass("awake"), s.addClass("sleep")), t.length > 0 && t.removeClass("sleep"));
        }),
        a("#section-counter, .hero-wrap, .ftco-counter").waypoint(
            function(e) {
                if ("down" === e && !a(this.element).hasClass("ftco-animated")) {
                    var s = a.animateNumber.numberStepFactories.separator(",");
                    a(".number").each(function() {
                        var e = a(this),
                            t = e.data("number");
                        console.log(t), e.animateNumber({ number: t, numberStep: s }, 7e3);
                    });
                }
            }, { offset: "95%" }
        ),
        (e = 0),
        a(".ftco-animate").waypoint(
            function(s) {
                "down" !== s ||
                    a(this.element).hasClass("ftco-animated") ||
                    (e++,
                        a(this.element).addClass("item-animate"),
                        setTimeout(function() {
                            a("body .ftco-animate.item-animate").each(function(e) {
                                var s = a(this);
                                setTimeout(
                                    function() {
                                        var a = s.data("animate-effect");
                                        "fadeIn" === a
                                            ?
                                            s.addClass("fadeIn ftco-animated") :
                                            "fadeInLeft" === a ?
                                            s.addClass("fadeInLeft ftco-animated") :
                                            "fadeInRight" === a ?
                                            s.addClass("fadeInRight ftco-animated") :
                                            s.addClass("fadeInUp ftco-animated"),
                                            s.removeClass("item-animate");
                                    },
                                    50 * e,
                                    "easeInOutExpo"
                                );
                            });
                        }, 100));
            }, { offset: "95%" }
        ),
        a(".image-popup").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            closeBtnInside: !1,
            fixedContentPos: !0,
            mainClass: "mfp-no-margins mfp-with-zoom",
            gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
            image: { verticalFit: !0 },
            zoom: { enabled: !0, duration: 300 },
        }),
        a(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 });
})(jQuery),
$(function() {
    $(".progress").each(function() {
        var e = $(this).attr("data-value"),
            s = $(this).find(".progress-left .progress-bar"),
            t = $(this).find(".progress-right .progress-bar");
        e > 0 && (e <= 50 ? t.css("transform", "rotate(" + a(e) + "deg)") : (t.css("transform", "rotate(180deg)"), s.css("transform", "rotate(" + a(e - 50) + "deg)")));
    });

    function a(a) {
        return (a / 100) * 360;
    }
});