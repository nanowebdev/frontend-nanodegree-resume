/*$("#main").append("Pallu");

var awesomethoughts = "I am Pallu and I am AWESOME!";
var funthoughts = awesomethoughts.replace("AWESOME", "Fun");
$("#main").append(funthoughts);

var square = function(x) 
{
  return x * x;
};*/

var name = "Pallavi Bandalli";
var formattedName = HTMLheaderName.replace("%data%" , name);

var role = "Future Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%" , role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {"name": "Pallavi",
			"role" : "Web Developer",
			"contactInfo" : {
				"Phone" : "678-237-3387",
				"email" : "natyanjali.usa@gmail.com",
				"Location": "New England"
			},
			"bioPic" : "",
			"welcomeMsg" : "Hello World!!",
			"skills" : ["Dancing", "Coding", "Teaching", "volunteering"]
		}
// Commented code start - Reason
/*$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo.Phone);
$("#main").append(bio.contactInfo.email);

var work = {};
work.jobPosition = "Educator";
work.employer = "JSS";
work.yearsWorked = "1";
$("#main").append(work["jobPosition"]);

var education = {};
education["lastSchool"] = "NIE";
$("#main").append(education.lastSchool);*/
// Commented code End

var education = {
    "schools": [
    	{
            "schoolName": "NIE",
            "schoolDegree" : "Degree",
            "schoolDates" : "2004",
            "schoolLocation": "India",
            "schoolMajor": ["Industrial Production and Management"]
        },
        {
            "schoolName": "LionsSchool",
            "schoolDegree" : "Pre-University",
            "schoolDates" : "2000",
            "schoolLocation": "India",
            "schoolMajor": ["Physics", "Chemistry", "Mathematics", "Biology"]
        }
        
    ],
    "onlineCourses":  
    {
    	"onlineClasses" : "NanoDegree",
		"onlineTitle" : "FrontEnd Web Development",
		"onlineSchool" : "Udacity",
		"onlineDates" : 2014,
		"onlineURL" : "https://www.udacity.com/course/nd001"

    }
    
}

var work = {
    
    "jobs": [ 

        {
		      "workEmployer" : "google.com",
		      "workTitle" : "Business",
    		  "workDates" : "2015 - future",
    		  "workLocation" : "Work from Home",
    		  "workDescription" : "E-Commerce Business"
        } , 
        
        {
            "workEmployer" : "Northampton Public Schools",
            "workTitle" : "volunteer ",
            "workDates" : "2015 - future",
            "workLocation" : "Jackson Street School",
            "workDescription" : "After School program - Teaching computer to kids "
        }         

        ] 
           

        }

var projects = {
    "projects": [
        {
            "projectTitle": "Morning MathClub",
            "projectDates": "2013-future",
            "projectDescription": "vjfdioghspeioubnjpseurbh",
            "projectImage": " "
        },
        {
            "projectTitle": "Computer Coding",
            "projectDates": "2014-2016",
            "projectDescription": "hjfkhdfkljvidfpuh nvkjhuif",
            "projectImage" : " "
        }
        ]
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].projectTitle);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].projectDates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].projectDescription);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].projectImage);
        $(".project-entry:last").append(formattedImage);

        
                              }
}();



if (bio.skills.length > 0) {

     $("#header").append(HTMLskillsStart);
     

     bio.skills.forEach( function(aelement) {
        var mySkills = HTMLskills.replace("%data%" ,  aelement);
        $("#skills").append(mySkills);
                                         } 
                        );

}



work.display = function() {
for (job in work.jobs) { 
     
      
    var employer = HTMLworkEmployer.replace("%data%",  work.jobs[job].workEmployer);
    var title = HTMLworkTitle.replace("%data%",  work.jobs[job].workTitle);
    var dates = HTMLworkDates.replace("%data%",  work.jobs[job].workDates);
    var description = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);
    

    var formatteddata = employer + title ;
   
    

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formatteddata);
    //$("#workExperience").append(employer);
    //$("#workExperience").append(title);
    $(".work-entry:last").append(dates);
    $(".work-entry:last").append(description);
    
}  
}();

function inName(oldName) {
    var finalName = oldName;

    // Your code goes here!
    finalName = finalName.split(" ");
    name1 = finalName[1].toUpperCase();
    name2 = finalName[0].slice(0,1).toUpperCase() + finalName[0].slice(1).toLowerCase();
    finalName = name2 + " " + name1;
    
    //$("h1#name").text(finalName);
    // Don't delete this line!
    return finalName;
};
$("#main").append(internationalizeButton);
// Did your code work? The line below will tell you!



