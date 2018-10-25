For Traversy's Dev Connector:

Request URL:http://localhost:3000/api/profile
Request Method:POST

Request Payload:

{
	bio :"this is my bio",
 	company : "Amp Rocks",
	facebook: "facebook.com/babaman"
    githubusername: "sanusart",
	handle: "babamanhandle",
	instagram: "instagram.com/babaman",
	linkedin: "linkedin.com/babaman",
	location: "India",
	skills: "Coding,Rocking, Dancing, Flying",
	status: "Manager",
	twitter: "twitter.com/babaman",
	website: "ampitup.io",
	youtube: "youtube.com/babaman"
}

-------------------------------

For the Meet Leonard Chrome Extension

Request URL: http://45.55.120.26/add_profile
Request Method: POST

Form Data: {
firstName: 'Mark',
lastName: 'Rollins',
entityUrn: 'ACoAAALJEHQB3xNCpTE7v139bsx3A1ScC9eHDXY',
objectUrn: 46731380,
headline: 'Content Writer at TheGeekChurch.com',
publicIdentifier: 'marollins',
industryCode: 103,
picture: 'https://media.licdn.com/dms/image/C4D03AQFkF7P4wgOv0g/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=IpIfu-zF5ep2JNjiDy5jO8qi-vba89h22ydAk_7kMFU',
trackingId: 'FwCgrjr3SlyEbtFROJlOcw==',
locationName: 'Pullman, Washington',
postalCode: 99163,
versionTag: 712099154,
schoolName: 'Washington State University',
fieldOfStudy: 'English',
title: 'Writer',
companyName: 'The Geek Church',
languages: 'undefined',
skills: 'Blogging||26,Marketing||27,Creative Writing||28,Web Content||29',
email: 'freelancermark@yahoo.com',
phone: 'undefined'
}

Response: {"success":"Profile saved"}