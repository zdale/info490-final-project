

var count = 1;
var database_dict = {}



$(function() { 
    $('#results-form').on('submit', function(e) { 
    	e.preventDefault();
    	var athlete_name = document.getElementById("athlete-name").value;
    	var athlete_affil = document.getElementById("athlete-affil").value;
    	var athlete_time = document.getElementById("athlete-time").value;
        
        database_dict[count] = {}
        database_dict[count].athlete_name = athlete_name;
        database_dict[count].athlete_affil = athlete_affil;
        database_dict[count].athlete_time = athlete_time;

        $('#results-table').append(
        	  "<tr>"
        	+ "<td>"+ count +"</td>"
        	+ "<td>" + athlete_name + "</td>"
        	+ "<td>" + athlete_affil + "</td>"
        	+ "<td>" + athlete_time + "</td>"
        	+ "</tr>"
        );
        console.log(database_dict); 
        count++;
    });
});

function submitResultsToDataBase(){
	$.ajax({
		url: '/submit-results',
		type: 'post',
		data: {
			results: database_dict,
		}
	});
}