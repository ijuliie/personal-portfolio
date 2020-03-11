let url = "https://docs.google.com/spreadsheets/d/1-cr4HyUsV0uPqpBe4AQIYyC5W2JHpm1-3mlrxi825ME/edit#gid=0"
let id = "1-cr4HyUsV0uPqpBe4AQIYyC5W2JHpm1-3mlrxi825ME"
let source = `https://spreadsheets.google.com/feeds/list/1-cr4HyUsV0uPqpBe4AQIYyC5W2JHpm1-3mlrxi825ME/od6/public/values?alt=json`



fetch(source)
    .then(reponse => reponse.json())
    .then(data => {
        console.log("data:", data)
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
        let $url = $("<a>").attr("href", projects[i].url).html("See code")
    
        $wrapper.append($image, $title, $url)
        $(".projects").append($wrapper)
    }
}


//Hamburger nav bar
$(".fa-bars").on("click", () => {
    $("ul").toggleClass("show")
})