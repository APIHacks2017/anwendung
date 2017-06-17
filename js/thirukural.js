	getThirukkural();
	});	
	
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	
	function getThirukkural(){
	
		var tno = getRandomInt(1, 1330);
		console.log('in getThirukkural');
	
		//pass number
		//http://52.36.211.72:5555/gateway/Thirukkural/1.0/{number}
		//Query Params
		//{'appid','x5mwe55oderut'}
		//Auth-Header
		//x-Gateway-APIKey => 4fbacb53-4a39-407e-816c-a691dd3839e0
		
		var apiKey = "4fbacb53-4a39-407e-816c-a691dd3839e0";
		var apiurl="http://52.36.211.72:5555/gateway/Thirukkural/1.0/"+ tno+ "?APIKey=" + apiKey;
		var paramData = {'appid':'x5mwe55oderut'};
		
		//callAPI(apiurl, httpType, apiKey, paramData, successCallBack, errorCallBack)
		
		$.ajax({
			url: apiurl, 
			//headers: {"x-Gateway-APIKey" : apiKey},
			// if you using below proxy passes use --> url: '/xxx',
			type: 'GET', //or GET
			crossDomain : true,
			data:paramData
		}).then(function(xmlData) {
			console.log('call complete');
			//var xml = $.parseXML(xmlData);
			//alert(xmlData);
			var line1 = $(xmlData).find("Kural").find("Line1").text();
			var line2 = $(xmlData).find("Kural").find("Line2").text();
			var enTranslation = $(xmlData).find("Kural").find("Translation").text();

			console.log(line1);
			console.log(line2);
			console.log(enTranslation);
			
			var tdiv = $("<div/>");
			tdiv.append($("<p/>").html("Kural No : " + tno));
			tdiv.append($("<p/>").html(line1));
			tdiv.append($("<p/>").html(line2));
			tdiv.append($("<p/>").html(enTranslation));

			$("#result_thirukkural").html('').append(tdiv);
		});
	}
	