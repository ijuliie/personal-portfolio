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
    
    $.each(() => {
        let $img = $("<img>").attr(image.gsx$image.$t)
        $img.html("project")
        $(".projects").append($img)
    })
    
    console.log("app-projects:", projects)

}


$(".fa-bars").on("click", () => {
    $("li").toggleClass("show")
})