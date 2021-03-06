# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Complete
|Day 6| Present | Complete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Google Sheet

https://docs.google.com/spreadsheets/d/1-cr4HyUsV0uPqpBe4AQIYyC5W2JHpm1-3mlrxi825ME/edit#gid=0

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

https://wireframepro.mockflow.com/editor.jsp?editor=off&publicid=Ma85a4d549b1e44a49d2a7f8ed9e19f201583541668885&projectid=M5256a4719c4bb80f35c4a57c8fa506831583541049691&perm=Owner#/page/b9f2759ddd5c4d4da6338028cf00a869/sidebar/off

## Time/Priority Matrix 



### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

-hamburger nav bar
-pull data from google sheet


#### PostMVP 
- hamburger nav bar
- pull data from google sheet
- transition effect for navbar
- navbar is active when scrolled to content of page
- scroll effect on nav links


## Functional Components

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger nav bar | H | 2hrs | 1.5 hrs | 3.5 hrs |
| Animation on nav bar | H | 2hrs | 4 hrs | 6 hours |
| Pull data from google sheet| H | 1 hr | 2.5 hrs | 2.5 hrs | 
| Scroll animation on nav links | H | 2 hrs | 5 hrs | 5 hrs | 
| Total | H | hrs| hrs | hrs |

## Additional Libraries


## Code Snippet

At one point, my active nav items were not working how I wanted it to, so when I was doing this code, I used the console to figure out the exact point of each scroll position.

```
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
```

## Issues and Resolutions


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
