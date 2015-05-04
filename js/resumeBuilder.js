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

var welcomeMsg = "Welcome to Pallavi's World!";
var formattedWelmsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
$("#header").append(formattedWelmsg);


var bio = {"name": "Pallavi",
			"role" : "Web Developer",
			"contacts" : {
				"Phone" : "678-237-3387",
				"email" : "natyanjali.usa@gmail.com",
                "github":"Nanowebdev",
				"location": "Northampton,USA"
			},
			"bioPic" : "",
			"welcomeMsg" : "Hello World!!",
			"skills" : ["Dancing", "Coding", "Teaching", "volunteering"]
		}
// Commented code start - Reason
//$("#main").append(bio.name);
//$("#main").append(bio.role);
var formattedPhone = HTMLmobile.replace("%data%",bio.contacts.Phone );
$("#footerContacts").append(formattedPhone);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#footerContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);

/*var work = {};
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
            "schoolDates" : "2004 ",
            "location": "Mysore,India",
            "schoolMajor": ["Industrial Production and Management"]
        },
        {
            "schoolName": "LionsSchool",
            "schoolDegree" : "Pre-University",
            "schoolDates" : "2000 ",
            "location": "Mysore,India",
            "schoolMajor": ["Physics", " Chemistry", " Mathematics", " Biology"]
        }
        
    ],
    "onlineCourses":  [
    {
        
        "onlineTitle" : "An Introduction to Interactive Programming in Python",
        "onlineSchool" : "Coursera",
        "onlineDates" : 2014,
        "onlineURL" : "https://www.coursera.org/course/interactivepython1"
    },
    {
    	
		"onlineTitle" : "FrontEnd Web Development",
		"onlineSchool" : "Udacity",
		"onlineDates" : 2015,
		"onlineURL" : "https://www.udacity.com/course/nd001"

    }
                   ]

}

var work = {
    
    "jobs": [ 

        {
		      "workEmployer" : "google.com",
		      "workTitle" : "Business",
    		  "workDates" : "2015 - future",
    		  "workLocation" : "Florence,USA",
    		  "workDescription" : "E-Commerce Business"
        } , 
        
        {
            "workEmployer" : "Northampton Public Schools",
            "workTitle" : "volunteer ",
            "workDates" : "2015 - future",
            "workLocation" : "Easthampton,USA",
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



if (bio.skills.length > 0) {

     $("#header").append(HTMLskillsStart);
     

     bio.skills.forEach(function(aelement) {
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

education.display = function(){
    for (edu in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].schoolName);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].schoolDegree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].schoolDates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].schoolMajor);
        $(".education-entry:last").append(formattedSchoolMajor);
                                    }
    $("#education").append(HTMLonlineClasses);
    for(course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].onlineTitle);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].onlineSchool);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].onlineDates);
        $(".education-entry:last").append(formattedOnlineDate);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].onlineURL); 
        $(".education-entry:last").append(formattedOnlineURL);


    }


}();


function inName(oldName) {
    var finalName = oldName;
    finalName = finalName.split(" ");
    name1 = finalName[1].toUpperCase();
    name2 = finalName[0].slice(0,1).toUpperCase() + finalName[0].slice(1).toLowerCase();
    finalName = name2 + " " + name1;
    //$("h1#name").text(finalName);
    return finalName;
};

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);

