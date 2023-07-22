/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)  =>{
    el.addEventListener('click', toggleSkills)

})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.projects__modal'),
      modalBtns = document.querySelectorAll('.projects__button'),
      modalCloses = document.querySelectorAll('.projects__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPaper = new Swiper('.paper__container', {
    cssMode: true,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[data-id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('data-id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== CONTACT FORM VALIDATIONS ====================*/ 
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');

function validateName(){
    var name = document.getElementById('fullName').value;

    if(name.length == 0){
        nameError.innerHTML = 'Full name is required!';
        return false;
    }
    if( !name.match(/[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?/) ){
        nameError.innerHTML = 'Enter full name!';
        return false;
    }
    nameError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email_id').value;

    if(email.length == 0){
        emailError.innerHTML = 'A valid email address is required!';
        return false;
    }
    // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
        emailError.innerHTML = 'Invalid email!';
        return false;
    }
    emailError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if (left>0){
        messageError.innerHTML = left + ' more characters are required!';
        return false;
    }
    messageError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

/*==================== EMAIL SERVICE ====================*/ 
function SendMail(){

    if(!validateName() || !validateEmail() || !validateMessage() ){
        // alert("Please fix the errors to send a message!");
        swal("Sorry!", "Please fix the errors to send a message!", "warning");
        return false;
    }

    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_4ajtfo5", "template_ryff15a", params).then(function (res){
        // alert("Success! " + res.status);
        // alert("Your message has been sent successfully!");
        swal("Success!", "Your message has been sent!", "success");
    })
}

/*==================== PDF Slider ====================*/
(function ($)
{
    var
        options = {},

        defaults =
        {
            container : "#carousel",
            item : "object",
            itemWidth : $(window).width() - 40,
            itemHeight : $(window).height() - 60,
            speed : 1000,
            activeSlideIndex : 0,

            _slides : null,
            _rootContainer : "pdfSlider_rootContainer",
            _slidesContainer : "pdfSlider_slidesContainer",
            _navButton : "pdfSlider_button",
            _prevButton : "pdfSlider_prev",
            _nextButton : "pdfSlider_next",
            _closeButton : "pdfSlider_close",
            _hideControlsButton : "pdfSlider_hideControls",
            _thumbsContainer : "pdfSlider_thumbsContainer",
            _controlsContainer : "pdfSlider_controlsContainer",
            _activeThumb : "pdfSlider_activeThumb",
            _activeSlide : "activeSlide",
            _slideWrapper : "pdfSlider_slideWrapper",

            _startMargin : "0px",
            _endMargin : "-3000px",
            _animatedProperty : "margin-left"
        },

        methods =
        {
            init : function (opts)
            {
                options = $.extend(defaults, opts);

                methods._create();
                methods._setActiveSlideIndex();
                methods._createControls();
                methods._createThumbs();
                methods._setActiveSlide();
                methods._attachEventHandlers();
            },

            _setSlides : function(slides)
            {
                options._slides = slides;
            },

            _setActiveSlide : function ()
            {
                options._slides
                    .css(options._animatedProperty, options._startMargin)
                    .removeClass(options._activeSlide)
                ;

                $.each(options._slides, function(index)
                {
                    if (index < options.activeSlideIndex)
                    {
                        $(this).css(options._animatedProperty, options._endMargin);
                    }
                });

                methods._setActiveThumb();
                options._slides.eq(options.activeSlideIndex).addClass(options._activeSlide);

                options.container.show();
                options._controlsContainer.show();
            },

            _setActiveThumb : function()
            {
                options._thumbsContainer.find("." + options._activeThumb).removeClass(options._activeThumb);
                options._thumbsContainer.find("a").eq(options.activeSlideIndex).addClass(options._activeThumb);
            },

            _setActiveSlideIndex : function()
            {
                if(options.activeSlideIndex < 0)
                    options.activeSlideIndex = 0;

                if(options.activeSlideIndex > options.container.find(options.item))
                    options.activeSlideIndex = options.container.find(options.item).length - 1;
            },

            _create : function ()
            {
                options.container = $(options.container).addClass(options._slidesContainer);
                options._rootContainer = $("<div />")
                    .addClass(options._rootContainer)
                    .css({
                        height : options.itemHeight,
                        width : options.itemWidth
                    })
                ;
                options._thumbsContainer = $("<div />").addClass(options._thumbsContainer);
                options._controlsContainer = $("<div />").addClass(options._controlsContainer).addClass("isVisible");
                options._slideWrapper = $("<div />").addClass(options._slideWrapper);

                options.container.wrap(options._rootContainer);
                options.container.after(options._controlsContainer);
                options.container.before(options._thumbsContainer);

                options.container.find(options.item).wrap(options._slideWrapper);

                var slides = options.container.children();

                methods._setSlides(slides);

                $.each(options._slides, function(key, value)
                {
                    var zIndex = -($(value).index() * 10) + (10 * options._slides.length);
                    $(value)
                        .css({
                            height : options.itemHeight,
                            width : options.itemWidth,
                            zIndex : zIndex
                        })
                    ;
                });
            },

            _createControls : function()
            {
                var prev = $("<div />").addClass(options._navButton).addClass(options._prevButton);
                var next = $("<div />").addClass(options._navButton).addClass(options._nextButton);
                var close = $("<div />").addClass(options._navButton).addClass(options._closeButton);
                var hideControls = $("<div />").addClass(options._navButton).addClass(options._hideControlsButton);
                var anchor = $("<a href='#'></a>").text("hideControls");

                hideControls.html(anchor);

                options._controlsContainer.append(prev);
                options._controlsContainer.append(next);
                options._controlsContainer.append(close);
                options._controlsContainer.append(hideControls);
            },

            _createThumbs : function()
            {
                var html = "";
                var listItem = $("<ul><li><a href='#'> </a></li></ul>");

                $.each(options._slides, function(key, value)
                {
                    var caption = $(value).find(options.item).data("caption");
                    if(caption == undefined)
                    {
                        var i = parseInt(key) + 1;
                        caption = "slide " + i;
                    }

                    listItem.find("a").text(caption);
                    html += listItem.html();
                });

                options._thumbsContainer.html(html);
            },

            destroy : function ()
            {
                options._controlsContainer.hide();
                options.container
                    .hide()
                    .find("." + options._activeSlide).removeClass(options._activeSlide)
                ;
                options.activeSlideIndex = 0;
                options._slides.css(options._animatedProperty, options._startMargin);
                options._thumbsContainer.find("a").removeClass(options._activeThumb);
            },

            //todo remove hard-coded animated property
            next : function()
            {
                if (options.activeSlideIndex < options._slides.length - 1)
                {
                    var activeSlide = options._slides.eq(options.activeSlideIndex);

                    activeSlide.animate(
                        {
                            marginLeft : options._endMargin
                        },
                        options.speed,
                        function ()
                        {
                            activeSlide.removeClass(options._activeSlide);
                            activeSlide.next(options._slideWrapper).addClass(options._activeSlide);
                        }
                    );
                    options.activeSlideIndex++;

                    methods._setActiveThumb();
                }
            },

            //todo remove hard-coded animated property
            prev : function()
            {
                if (options.activeSlideIndex > 0)
                {
                    var activeSlide = options._slides.eq(options.activeSlideIndex);

                    activeSlide.removeClass(options._activeSlide);
                    activeSlide.prev(options._slideWrapper)
                        .addClass(options._activeSlide)
                        .animate(
                        {
                            marginLeft : options._startMargin
                        },
                        options.speed
                    )
                    ;
                    options.activeSlideIndex--;

                    methods._setActiveThumb();
                }
            },

            _hideControls : function()
            {
                options._controlsContainer.toggleClass("isVisible");
                options._controlsContainer.find("." + options._navButton).not("." + options._hideControlsButton).toggle();

                if(options._controlsContainer.hasClass("isVisible"))
                    $("." + options._hideControlsButton).find("a").text("hideControls");
                else
                    $("." + options._hideControlsButton).find("a").text("showControls");
            },

            _attachEventHandlers : function()
            {
                options._controlsContainer
                    .on({
                        click : function()
                        {
                            if($(this).hasClass(options._prevButton))
                                methods.prev();

                            if($(this).hasClass(options._nextButton))
                                methods.next();

                            if($(this).hasClass(options._closeButton))
                                methods.destroy();

                            if($(this).hasClass(options._hideControlsButton))
                                methods._hideControls();

                            return false;
                        }
                    }, "." + options._navButton)
                ;

                options._thumbsContainer
                    .on({
                        click : function()
                        {
                            options.activeSlideIndex = $(this).parent().index();

                            methods._setActiveSlide();

                            return false;
                        }
                    }, "a")
                ;
            }
        }
        ;

    $.fn.pdfSlider = function (method)
    {
        // Method calling logic
        if (methods[method])
        {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === "object" || !method)
        {
            return methods.init.apply(this, arguments);
        }
        else
        {
            console.log("Method " + method + " does not exist");

            return false;
        }
    };
})(jQuery);