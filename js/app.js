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

/*      append data into html       */
function appendData(projects, i) {
    for(let i = 0; i < projects.length; i += 1){
        let $wrapper = $("<div>").addClass("boxes")
        let $image = $("<img>").attr("src", projects[i].image).addClass("image")
        let $title = $("<p>").html(projects[i].title).addClass("title")
        let $url = $("<a>").attr("href", projects[i].url).html("See app").addClass("url")
        
        $wrapper.append($image, $title, $url)
        $(".projects").append($wrapper)
    }
}
    

function app(projects){
    appendData(projects)
}



/*       Hamburger nav bar       */
$(".fa-bars").on("click", () => {
    $("ul").toggleClass("show")
})



/*      navbar element is highlighted when clicked    */
$(".hide .nav-item a").on("click", function() {
    $(".nav-item").removeClass("active")
    //closest finds all child element
    $(this).closest(".nav-item").addClass("active")
})



/*     scroll animation      */
/*        link for scroll animation     
https://html-online.com/articles/animated-scroll-anchorid-function-jquery/ */
$(document).ready(function(){
    $(".hide .nav-item a").click(function(e) {
        e.preventDefault()
        $("html, body").animate({ 
            scrollTop: $($(this).attr("href")).offset().top 
        }, 600)
    })
})


/*      highlight active menu when scrolling down to sections    */
/* https://www.steckinsights.com/change-active-menu-as-you-scroll-with-jquery/ */
function activeLink(){
    let $scrollPosition = $(window).scrollTop()
    let $aboutme = $("#aboutme").position().top
    let $projects = $("#projects").position().top
    let $contact = $("#contact").position().top

    if ($scrollPosition >= $aboutme && $scrollPosition < $projects) { 
        $(".nav-item-1").addClass("active")
    } else {
        $(".nav-item-1").removeClass("active")
    }
    if ($scrollPosition >= $projects && $scrollPosition < 1930) {
        $(".nav-item-2").addClass("active")
    } else { 
        $(".nav-item-2").removeClass("active")
    }
    if ($scrollPosition > 1930) {
        $(".nav-item-3").addClass("active")
    } else { 
        $(".nav-item-3").removeClass("active")
    }
}

$(document).ready( () => { 
    $(window).scroll( () => {
        activeLink()
    })
})


// $(".button").on("click", () => {
//     let $name = $(".name").val()
//     let $email = $(".email").val()
//     if($name === "" || $email === ""){
//         $($name).toggleClass("invalid")
//     }
// })