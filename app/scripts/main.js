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
				text = ''
				github = "https://github.com/robss04";
				linkedin = "http://hk.linkedin.com/in/robynsteinberg";
				break;
			case "Bruno":
			  image = "bruno.jpg";
				name = "Bruno Wu";
				country = "USA/HK";
				text = '"I had a prior career in finance and now am transitioning into the software development field. Seeking to start the software apprenticeship journey by joining an innovative (and preferably industry disrupting) company. Areas of interest include: Back-end dev, data science, machine learning, and analytics."'
				github = "https://github.com/wubr2000";
				linkedin = "http://www.linkedin.com/in/josiahhatch";
				break;
			case "Josiah":
			  image = "gFMNHyA.gif"
			  name = "Josiah Hatch"
			  country = "USA"
			  text = '"After looking for a job in sales for a few months, I stumbled upon the WDI course. I\'ve always had an interest in technology, but I\'ve never had the chance to learn. I\'m so happy that I took the time to learn how to code, I absolutely love it and wish I had learned years ago!"'
				github = "https://github.com/vbsiqebu";
				linkedin = "http://hk.linkedin.com/in/brunowu";
				break;
			case "Jin":
			  image = "jin.jpg"
			  name = "Jin Hyejin Yang"
			  country = "Korea"
			  text = '"I am excited to work as web developer as I believe in the power of changing the world. With international experience in science, banking and fashion, I adapt and focus on problem solving."'
				github = "https://github.com/yytina"
				linkedin = "http://hk.linkedin.com/in/jinyy"
				break;
			case "Deepak":
			  image = "person.jpg"
			  name = "Deepak Jayakumaran"
			  country = "Singapore"
			  text = ''
				github = "https://github.com/godelian"
				linkedin = "#"
				break;
			case "Karen":
				image = "person.jpg"
				name ="Karen Farzam"
				country = "France"
				text = ''
				github = "https://github.com/KarenZam"
				linkedin = "http://hk.linkedin.com/pub/karen-farzam/0/ab7/2a"
				break;
			case "Kingsley":
			  image = "person.jpg"
				name ="Kingsley Man"
				country = "UK/HK"
				text = ''
				github = "https://github.com/kingsleyman"
				linkedin = "http://hk.linkedin.com/in/kingsleyman"
				break;
			case "Ian":
			  image = "person.jpg"
				name ="Ian O'Connor"
				country = "UK"
				text = ''
				github = "https://github.com/Xenos54"
				linkedin = "http://hk.linkedin.com/in/ianoconnorcqf"
				break;
			case "Sophia":
			  image = "person.jpg"
				name ="Sophia Raji"
				country = "Morocco"
				text = ''
				github = "https://github.com/sudosoph"
				linkedin = "#"
				break;
			case "Steph":
			  image = "person.jpg"
				name ="Stephanie Siaw"
				country = "Indonesia"
				text = ''
				github = "https://github.com/stephs829/"
				linkedin = "http://hk.linkedin.com/in/stephaniesiaw/en"
				break;

		};
		$('#modal-name').text(name);
		$("#modal-image").html('<img id="myModalImage" src="images/' + image + '" alt="student image">');
		$('#modal-country').text(country);
		$('#modal-text').text(text);
		$('#modal-contacts').html('<a href="'+ github + '" target="_blank"><img src="images/github.png" alt="Github" id="github"></a><a href="' + linkedin + '" target="_blank"><img src="images/linkedin.png" alt="LinkedIn" id="linkedin"></a>');
			
		
	}
});