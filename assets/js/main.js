/*=========================================

Template Name: Alex - Personal Portfolio Template
Author: mhbthemes
Version: 1.0
Design and Developed by: mhbthemes

NOTE: This is the custom jQuery file for the template

=========================================*/


(function ($) {
	"use strict";
    
    var $window = $(window),
            $body = $('body');
    
    jQuery(document).ready(function($){

        /*======== Sticky header ===========*/
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function() {
          if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });
      
        /*======== Smoothscroll js ===========*/
        $(function() {
          $('a.smoth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
          });
        });  
            
        /*======== jquery scroll spy ===========*/
        $body.scrollspy({
            target : ".navbar-collapse",
            offset : 95
        });
        
        /*========  Bootstrap menu fix ===========*/
        $(".navbar-toggle").on("click", function(){
            $body.addClass("mobile-menu-activated");
        });
        
        $("ul.nav.navbar-nav li a").on("click", function(){
            $(".navbar-collapse").removeClass("in");
        });
        
        /*======== background-image flickering solution for mobile ===========*/
        var bg = jQuery("#home");
        function resizeBackground() {
            bg.height(jQuery(window).height() + 60);
        }
      resizeBackground();
        
        /*======== Modal js ===========*/
        $("#projectModal1, #projectModal2, #projectModal3, #projectModal4, #projectModal5, #projectModal6, #projectModal7, #projectModal8, #projectModal9").on('hidden.bs.modal', function (e) {
            $("#projectModal1 iframe, #projectModal2 iframe, #projectModal3 iframe, #projectModal3 iframe, #projectModal4 iframe, #projectModal5 iframe, #projectModal6 iframe, #projectModal7 iframe, #projectModal8 iframe, #projectModal9 iframe").attr("src", $("projectModal1 iframe, #projectModal2 iframe, #projectModal3 iframe, #projectModal3 iframe, #projectModal4 iframe, #projectModal5 iframe, #projectModal6 iframe, #projectModal7 iframe, #projectModal8 iframe, #projectModal9 iframe").attr("src"));
        });
   
        /*======== Intro typer ===========*/
        var element = $(".element");
        var subscript = "2"
        $(function() {
            element.typed({
                strings: ["Formula: MgF" + subscript.sub(), "Magnesium has atomic number of 12, Fluorine is 9.", "The atomic mass of the compound is 43.", "The density of this compound is 3.15 g/cm3.", "Solubility is 0.012 g/100 mL", "Melting point is 1,263*C.", "Boiling point is 2,260*C.", "Solid at room temperature.", "Color is white.", "Not very lustrous, it looks only a little bit shiny.", "Has some level of reactivity."],
                typeSpeed: 60,
                backDelay: 500,
                backSpeed: 5,
                startDelay: 3000,
                loop: true,
                shuffle: false,
                smartBackspace: true,
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true,
            });
        });
        
        /*======== Parallax js ===========*/
        $window.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
        
        /*======== Magnific Popup ===========*/
        $('.work-popup').magnificPopup({type:'image'});
        
         /*========  CounterUp ===========*/
        $('.counter').counterUp({
            delay: 4,
             time: 800
        });
 
        /*========   WOW js===========*/
        new WOW({ mobile: false }).init();
    
        /*======== jQuery mixItUp ===========*/
        $('.work-inner').mixItUp();
    
        /*========   owl carousel testimonial ===========*/
        $(".testimonial-list").owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    

    });
    
   
    $window.on('load', function(){
        
        /*======== Preloder ===========*/
       setTimeout(function() {
            $('body').addClass('loaded');
        }, 2500);

    });

}(jQuery));	

