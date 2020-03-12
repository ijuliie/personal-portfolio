let url = "https://docs.google.com/spreadsheets/d/1-cr4HyUsV0uPqpBe4AQIYyC5W2JHpm1-3mlrxi825ME/edit#gid=0"
let id = "1-cr4HyUsV0uPqpBe4AQIYyC5W2JHpm1-3mlrxi825ME"
let source = `https://spreadsheets.google.com/feeds/list/1-cr4HyUsV0uPqpBe4AQIYyC5W2JHpm1-3mlrxi825ME/od6/public/values?alt=json`


/*      parse data from google sheets    */
fetch(source)
    .then(reponse => reponse.json())
    .then(data => {
        let projects = data.feed.entry.map(project => {
            return {
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                url: project.gsx$url.$t
            }
        })
        app(projects)
    })

    

function app(projects){
    appendData(projects)
}

function appendData(projects, i) {
    for(let i = 0; i < projects.length; i += 1){
        let $wrapper = $("<div>").addClass("boxes")
        let $image = $("<img>").attr("src", projects[i].image).addClass("image")
        let $title = $("<p>").html(projects[i].title).addClass("title")
        let $url = $("<a>").attr("href", projects[i].url).html("See code").addClass("url")
    
        $wrapper.append($image, $title, $url)
        $(".projects").append($wrapper)
    }
}


/*       Hamburger nav bar       */
$(".fa-bars").on("click", () => {
    $("ul").toggleClass("show")
})

let $navigation = $(".navbar > div:nth-of-type(2) > ul > li > a")
console.log($navigation)

 
// function activeLink(){
//     $(".hide .nav-item a").click(function() {
//         //remove active class
//         $(".nav-item").removeClass("active")
//         $(this).closest(".nav-item").addClass("active")
//     })
// }

// activeLink()


/*     scroll animation      */
/* https://timoanttila.com/tutorials/animated-smooth-scrolling-effect */

$(function() {
    $(".hide .nav-item a").click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']')
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    })
  })