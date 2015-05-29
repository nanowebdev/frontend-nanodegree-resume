var bio = {"name": "Pallavi Bandalli",
		   "role" : "Future Web Developer",
           "welcomeMsg" : "Welcome to Pallavi's World!",
           "bioPic" : "./images/web1.jpg",
           "skills" : [ "Coding", "Teaching", "Dancing", "Volunteering"],
		   "contacts" : {
				"Phone" : "678-237-3387",
				"email" : "natyanjali.usa@gmail.com",
                "github":"Nanowebdev",
				"location": "Northampton,USA"
			}           
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%" , bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
    var formattedWelmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelmsg);
    $("#header").append(formattedBioPic);
    if (bio.skills.length > 0) {
     $("#header").append(HTMLskillsStart);
     bio.skills.forEach(function(aelement) {
        var mySkills = HTMLskills.replace("%data%" ,  aelement);
        $("#skills").append(mySkills);
        } );
    }
    var formattedPhone = HTMLmobile.replace("%data%",bio.contacts.Phone );
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedPhone);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);  
}();

var education = {
    "schools": [
    	{
            "schoolName": "National Institute Of Engineering",
            "schoolWebsite":"http://www.nie.ac.in/",
            "schoolDegree" : "Degree",
            "schoolDates" : "2004 ",
            "location": "Mysore, India",
            "schoolMajor": ["Industrial Production and Management"]
        },
        {
            "schoolName": "Lions Pre-University College",
            "schoolWebsite":"https://plus.google.com/112381606883424346720/about?gl=us&hl=en" ,
            "schoolDegree" : "Pre-University",
            "schoolDates" : "2000 ",
            "location": "Kollegal, India",
            "schoolMajor": ["Physics", " Chemistry", " Mathematics", " Biology"]
        }  
    ],
    "onlineCourses":  [
        {
            "onlineTitle" : "An Introduction to Interactive Programming in Python",
            "onlineSchool" : "Coursera",
            "onlineDates" : 2014,
            "onlineURL" : "www.coursera.org",
            "onlinePage":"https://www.coursera.org/",
            "onlineWebsite":"https://www.coursera.org/course/interactivepython1"
        },
        {
		    "onlineTitle" : "FrontEnd Web Development NanoDegree",
		    "onlineSchool" : "Udacity",
		    "onlineDates" : 2015,
		    "onlineURL" : "www.udacity.com",
            "onlinePage":"https://www.udacity.com/",
            "onlineWebsite":"https://www.udacity.com/course/nd001"
        }
    ]
};
education.display = function(){
    for (edu in education.schools) {
        $("#education").append(HTMLschoolStart); 
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].schoolName);
        var formattedSchoolWebsite = formattedSchoolName.replace("#",education.schools[edu].schoolWebsite);
        $(".education-entry:last").append(formattedSchoolWebsite);
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
        var formattedOnlineWebsite = formattedOnlineTitle.replace("#",education.onlineCourses[course].onlineWebsite);
        $(".education-entry:last").append(formattedOnlineWebsite);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].onlineSchool);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].onlineDates);
        $(".education-entry:last").append(formattedOnlineDate);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].onlineURL); 
        var formattedOnlinePage = formattedOnlineURL.replace("#",education.onlineCourses[course].onlinePage);
        $(".education-entry:last").append(formattedOnlinePage);
    }
}();

var work = {  
    "jobs": [
        {
		    "workEmployer" : "Qnet Group",
            "workWebsite": "http://www.qnet.net/",
		    "workTitle" : "Entrepreneur",
    		"workDates" : "2015 - future",
    		"location" : "Hong Kong, China",
    		"workDescription" : "E-Commerce home-based Business"
        }, 
        {
            "workEmployer" : "Northampton Public Schools",
            "workWebsite": "http://www.northampton-k12.us/",
            "workTitle" : "volunteer ",
            "workDates" : "2015 - future",
            "location" : "Northampton, Ma, USA",
            "workDescription" : "After School program - Teaching computer Programming to kids "
        }         
    ] 
};
work.display = function() {
    for (job in work.jobs) {      
        var employer = HTMLworkEmployer.replace("%data%",  work.jobs[job].workEmployer);
        var website = employer.replace("#",work.jobs[job].workWebsite);
        var title = HTMLworkTitle.replace("%data%",  work.jobs[job].workTitle);
        var dates = HTMLworkDates.replace("%data%",  work.jobs[job].workDates);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);  
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(title);
        $(".work-entry:last").append(website);
        $(".work-entry:last").append(dates);
        $(".work-entry:last").append(description);   
    }  
}();

var projects = {
    "projects": [
        {
            "projectTitle": "Morning MathClub",
            "projectDates": "2013-future",
            "projectDescription": "Morning MathClub runs 2 times a week at Jackson Street School, Northampton, Ma. I am the volunteer coordinator and help teacher organize games and activities. This club is mainly for the kids to learn Math and concepts of Math using varieties of games and fun activities. Around 40 kids participate every week and have improved their skills, speed and accuracy.",
            "projectImage": " "
        },
        {
            "projectTitle": "Computer Coding",
            "projectDates": "2014-2016",
            "projectDescription": "I am teaching elementary school kids 'Basics of Computer Programming' using the website www.code.org. I am also introducing the concept of Javascript to kids as the block codes in code.org has been developed using Javasctipt. This class involves some offline activities/ games.",
            "projectImage" : " "
        }
    ]
};
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

function inName(oldName) {
    var finalName = oldName;
    finalName = finalName.split(" ");
    name1 = finalName[1].toUpperCase();
    name2 = finalName[0].slice(0,1).toUpperCase() + finalName[0].slice(1).toLowerCase();
    finalName = name2 + " " + name1;
    return finalName;
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);