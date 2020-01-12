
function toggleNav() {
    $("nav").toggleClass("togglednav");
    $(".navlink").toggleClass("animated");
    $(".navlink").toggleClass("slideInLeft");
}

function toggleTeamNav() {
    toggleNav();
    $("body").toggleClass("toggledteam");
    $(".teamletter").toggleClass("animated");
    $(".teamletter").toggleClass("slideInLeft");
}

currentYear = document.getElementById('currentYear');
var date = new Date();
var year = date.getFullYear();
currentYear.innerHTML = year;

function imageLoop() {
    var basepath = '../static/images/gallery/';
    var gallery = ['battle_of_the_bay/','competitions/'];
    var battle_of_the_bay = ['1', '2', '3'];
    var competitions = ['4', '5', '6', '7'];
    var totallist = [battle_of_the_bay, competitions];
    totallist.forEach(function(event) {
        event.forEach(function(image) {
            $(".column:nth-child(1)").append('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(2)").prepend('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(3)").append('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(4)").prepend('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
        });
    });
    // for (var i = 0; i < totallist.length; i++) {
    //     for (var n = 0; n < totallist[i].length; n++) {
    //         $(".gallery").append('<img class="galleryimage" src="' + basepath + gallery[i] + totallist[i][n] + '.jpg">');
    //     }
    // }
}

imageLoop();

var prezLinks = ["https://docs.google.com/presentation/d/1ds09cnbuP2DbrLcoegZKKnc79plkbSCr24seIgcbFgU/edit", "https://docs.google.com/presentation/d/1d6jnrjK7lYGYljg8ClynKQufvdsK2ytw_DClbn1V2-Y/edit?usp=sharing", "https://docs.google.com/presentation/d/1CxeGAMvUqFkTkl6rFVLcjg5Uip3t5_KmIQNGSvYT3a4/edit?usp=sharing", "https://docs.google.com/presentation/d/1ftt3UsWfEZ7IA11Sl06uE5P7rtXMkKxqTBxItn4f1zU/edit?usp=sharing", "https://docs.google.com/presentation/d/11gT166IYgYeDoQO6iWI_VXyhEXsmbhDLMHv7Z6UXSMg/edit?usp=sharing", "https://docs.google.com/presentation/d/13ElOwnx2UmIWl79qG29dHIPnRpwSyIbdE3n7jvWs9Ew/edit?usp=sharing", "https://docs.google.com/presentation/d/1ZFK1kd4r-dGI9-0pxlO6bIMP50JVR4YlkrU7Y7mZblA/edit?usp=sharing", "https://docs.google.com/presentation/d/1jxnH-t5szREeRHyMGK8m4kDEi9HuYV3KUFXP8c7_IB0/edit?usp=sharing", "https://docs.google.com/presentation/d/107CVQVkoUoVmDj4nJ4EO7WUkWDh2stuyvSIdlR7JVtQ/edit?usp=sharing", "https://docs.google.com/presentation/d/1foGR9uCyFtij6QfCB6PwsZ20WdSu5MERYQEVoapmYWM/edit?usp=sharing", "https://docs.google.com/presentation/d/1tAoT00f0vkvJdGKOXtnCcJoTJFKIE-JTNOChUGvE8DI/edit?usp=sharing"];
var prezTitles = ["Overview", "Week 1: Engineering Process", "Week 2: Math Behind The Mechs", "Week 3: Motion Transfer", "Week 4: VEX Parts Overview", "Week 5: Bases & Friction Reductions", "Week 6: Lifts & Joints", "Week 7: Launchers", "Week 8: Intakes", "Week 9: Sensors & Electronics", "Week 10: Pneumatics"];

function presentationList(presentationLinks, presentationTitles) {
    for (var i=0; i < presentationLinks.length; i++) {
        $("#presentationList").append("<li class=\"prezlisting\"><a class=\"generallink\" href=\"" + presentationLinks[i] + "\">" + presentationTitles[i] + "</a></li>");
    }
}

presentationList(prezLinks, prezTitles);

function parallax() {
    $(window).scroll(function() {
        $('.header-landing').css('background-position-y', 'calc(50% + ' +  $(window).scrollTop() / -2 + 'px');
    });
}