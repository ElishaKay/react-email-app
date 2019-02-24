(function() {
	$.ajax({
		url: "http://localhost:8000/add_profile",
		data: {
			firstName: e.firstName,
			lastName: e.lastName,
			entityUrn: e.entityUrn,
			objectUrn: e.objectUrn,
			headline: e.headline,
			publicIdentifier: e.publicIdentifier,
			industryCode: e.industryCode,
			picture: e.picture,
			trackingId: e.trackingId,
			locationName: e.locationName,
			postalCode: e.postalCode,
			versionTag: e.versionTag,
			schoolName: e.schoolName,
			fieldOfStudy: e.fieldOfStudy,
			title: e.title,
			companyName: e.companyName,
			languages: e.languages,
			skills: e.skills,
			email: e.email,
			phone: e.phone
		},
		type: "POST",
		success: function(a) {
			b(a);
		},
		error: function(a) {
			b(a);
		}
	});
	$.ajax({
		url: server_url + "add_profile",
		data: {
			firstName: e.firstName,
			lastName: e.lastName,
			entityUrn: e.entityUrn,
			objectUrn: e.objectUrn,
			headline: e.headline,
			publicIdentifier: e.publicIdentifier,
			industryCode: e.industryCode,
			picture: e.picture,
			trackingId: e.trackingId,
			locationName: e.locationName,
			postalCode: e.postalCode,
			versionTag: e.versionTag,
			schoolName: e.schoolName,
			fieldOfStudy: e.fieldOfStudy,
			title: e.title,
			companyName: e.companyName,
			languages: e.languages,
			skills: e.skills,
			email: e.email,
			phone: e.phone
		},
		type: "POST",
		success: function(a) {
			b(a);
		},
		error: function(a) {
			b(a);
		}
	});
});
