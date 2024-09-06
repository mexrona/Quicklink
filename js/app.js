// Fixed Header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    if (scrollPos > 64) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

// Burger
const burger = document.getElementById("burger");
const mask = document.getElementById("mask");
const headerInner = document.getElementById("headerInner");
const logoHeader = document.getElementById("logoHeader");
const login = document.getElementById("login");
const loginText = document.getElementById("loginText");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    if (!burger.classList.contains("active")) {
        burger.classList.add("active");
        mask.classList.add("show");
        headerInner.classList.add("fix-border");
        logoHeader.classList.add("hidden");
        login.classList.add("no-hidden");
        loginText.classList.add("show");
        nav.classList.add("no-hidden");
    } else {
        burger.classList.remove("active");
        mask.classList.remove("show");
        headerInner.classList.remove("fix-border");
        logoHeader.classList.remove("hidden");
        login.classList.remove("no-hidden");
        loginText.classList.remove("show");
        nav.classList.remove("no-hidden");
    }
});

// Nav Links Active
const navLisks = document.querySelectorAll(".nav__link");

navLisks.forEach((element) => {
    element.addEventListener("click", () => {
        navLisks.forEach((element) => {
            element.classList.remove("active");
        });

        if (burger.classList.contains("active")) {
            burger.classList.remove("active");
            mask.classList.remove("show");
            headerInner.classList.remove("fix-border");
            logoHeader.classList.remove("hidden");
            login.classList.remove("no-hidden");
            loginText.classList.remove("show");
            nav.classList.remove("no-hidden");
        }

        if (!element.classList.contains("active")) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
});

// FAQ
const faqs = document.querySelectorAll(".faq__item");

faqs.forEach((element) => {
    element.addEventListener("click", () => {
        if (!element.classList.contains("active")) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
});

document.querySelector(".faq__item").click();

// Modal
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)",
        });
    }, 200);
});

modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({
        transform: "scale(0)",
    });

    setTimeout(function () {
        modalParent.removeClass("show");
        $("body").removeClass("no-scroll");
    }, 200);
});

$(".modal").on("click", function (event) {
    event.preventDefault();

    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "scale(0)",
    });

    setTimeout(function () {
        $this.removeClass("show");
        $("body").removeClass("no-scroll");
    }, 200);
});

$(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
});

// Button Select Focus
const buttonSelectIcon = document.getElementById("buttonSelectIcon");
const buttonSelect = document.getElementById("buttonSelect");
const feedbackOptions = document.getElementById("feedbackOptions");

buttonSelectIcon.addEventListener("click", () => {
    if (!buttonSelectIcon.classList.contains("active")) {
        buttonSelectIcon.classList.add("active");
        buttonSelect.classList.add("focus");
        feedbackOptions.classList.add("active");
        document.querySelectorAll(".feedback__option").forEach((element) => {
            element.classList.remove("active");
        });
    } else {
        buttonSelectIcon.classList.remove("active");
        buttonSelect.classList.remove("focus");
        feedbackOptions.classList.remove("active");
    }
});

// Feedback Option Active
const feedbackOptionArrow = document.querySelectorAll(".feedback__option");

feedbackOptionArrow.forEach((element) => {
    element.addEventListener("click", () => {
        feedbackOptionArrow.forEach((element) => {
            if (element.classList.contains("active")) {
                element.classList.remove("active");
            }
        });

        if (!element.classList.contains("active")) {
            element.classList.add("active");
            buttonSelectIcon.classList.remove("active");
            buttonSelect.classList.remove("focus");
            feedbackOptions.classList.remove("active");
        }
    });
});
