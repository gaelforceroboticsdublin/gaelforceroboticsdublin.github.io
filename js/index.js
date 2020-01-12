
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

var prezLinks = ["https://drive.google.com/open?id=1ds09cnbuP2DbrLcoegZKKnc79plkbSCr24seIgcbFgU", "https://drive.google.com/open?id=1czRFx12VOB6_6FFu1tHJrvgAva-kWa7r_ZbN-7Pxas0", "https://drive.google.com/open?id=1HXSzGJqJ_0P-WAIR5tVxJYYR0zyPbFXZwahXCYQkvxc", "https://drive.google.com/open?id=1Co1IcnDAOU1ILBoGIzwD8ox2R4U9O0g7ykcLrXfH9_4", "https://drive.google.com/open?id=1m-f02A9g0KJN0salFp4PuCZrV716IMxSffCxbVzZfJo", "https://drive.google.com/open?id=1royEabEcNmsw1qqPe93lb0V9mS7DiSCo-nCt1lzZydI", "https://drive.google.com/open?id=1Bv1TjdlBpbnZiSrSWHgVphHEIrtMyXaZOrhr7mFxGgs", "https://drive.google.com/open?id=19SfnCtaIe0_rLAOnBu9e8yzELgxaoWkeFePKEHtXQh8", "https://drive.google.com/open?id=1h03u6xVBR7W1_tvYR-a2LcrxGg1irk-UoUThsJvymig", "https://drive.google.com/open?id=1LoWrse5cKoy2lBdhVJn1mMVUpMt0kAdBktCRRMII5T0", "https://drive.google.com/open?id=1xP3_Mj-ngb8Ad_NRPKK3qD33zzBc7b_Dd1y0hbvLPHw"];
var prezTitles = ["Overview", "Week 1: Engineering Process", "Week 2: Math Behind The Mechs", "Week 3: Motion Transfer", "Week 4: VEX Parts Overview", "Week 5: Bases & Friction Reductions", "Week 6: Lifts & Joints", "Week 7: Launchers", "Week 8: Intakes", "Week 9: Sensors & Electronics", "Week 10: Pneumatics"];

function presentationList(presentationLinks, presentationTitles) {
    for (var i=0; i < presentationLinks.length; i++) {
        $("#presentationList").append("<li class=\"prezlisting\"><a class=\"generallink\" href=\"" + presentationLinks[i] + "\">" + presentationTitles[i] + "</a></li>");
    }
}

presentationList(prezLinks, prezTitles);
