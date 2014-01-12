$( function() {
	$('.student').on('click', function() {
		var studentName = $(this).data('name');
		showDetails(studentName);
		// if ($("#student-details-" + studentName).length == 0) {
		// 	$(".student-details").remove();
		// 	showDetails(studentName);
		// }
		// else {$("#student-details-" + studentName).remove();}
	})

	showDetails = function(studentName) {
		var image, name, country, text, github, linkedin;
		switch (studentName) {
			case "Emily":
			  image = "emily.jpg";
				name = "Emily Arnett";
				country = "UK";
				text = '"I came to Hong Kong over a year ago to study at HKU. After my studies, I wanted to pursue my interest in coding, so immediately applied for the WDI program. Over 3 months, I learned Rails, AngularJS and much more with great instructors and a lovely bunch of people. Now I have a awesome web developer role in a local startup!"'
				github = "http://github.com/emarnett";
				linkedin = "http://www.linkedin.com/in/emilyarnett";
				break;
			case "Robyn":
			  image = "robyn.jpg";
				name = "Robyn Steinberg";
				country = "USA";
				text = '"Robyn Stuff"'
				github = "https://github.com/robss04";
				linkedin = "http://hk.linkedin.com/in/robynsteinberg";
				break;
			// case "Karen":
			// 	break;
			// case "Josiah":
			// 	break;
			// case "Deepak":
			// 	break;
			// case "Kingsley":
			// 	break;
			// case "Ian":
			// 	break;
			// case "Sophia":
			// 	break;
			// case "Steph":
			// 	break;
			// case "Bruno":
			// 	break;
			// case "Jin":
			// 	break;
		};
		$('#modal-name').text(name);
		$("#modal-image").html('<img id="myModalImage" src="images/' + image + '" alt="student image">');
		$('#modal-country').text(country);
		$('#modal-text').text(text);
		$('#modal-contacts').html('<a href="'+ github + '" target="_blank"><img src="images/github.png" alt="Github" id="github"></a><a href="' + linkedin + '" target="_blank"><img src="images/linkedin.png" alt="LinkedIn" id="linkedin"></a>');
			
		
	}
});