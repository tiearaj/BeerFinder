$(function() {
	// copy this into another function that happens when you click on next page
	// instead of putting the page in the string, use a variable. 
	$.ajax({
            url: "https://community-open-beer-database.p.mashape.com/beers.json?token=ddac556dd6acc6b3691d027fa09a2c37d07694f893cd358d8479056428b5c63c&order=name&per_page=25",
            dataType: 'json',
            type: 'GET',
            beforeSend: function (request)
            {
                request.setRequestHeader("X-Mashape-Key", 'JwWtvszT5GmshUmevuC6V6w8UVrfp1nkFAqjsntGBGWgU9ebJ1');
            },
            success: function (beer) {
                getBeer(beer);
            },

        });
		
	//Lists breweries	
	/*$.getJSON("http://api.openbeerdatabase.com/v1/breweries.json?callback=?", function(response) {
		$(response.breweries).each(function() {
			$("#example-breweries").append($("<li>", { text : this.name}));
		});
		
	});*/
	// $.getJSON("http://api.openbeerdatabase.com/v1/beers.json?callback=?", function(response) {
// 				$(response.beers).each(function() {
// 				var $myLi = $('<li class="name">'+this.name+'</li>');
// 				var $myBeer = $('<div class="info">'+this.description+'</div>');
// 
// 					$("#example-beers").append($myLi);
// 				
// 				$($myLi).on('click',function() {
// 						$(this).append($myBeer);
// 					});
// 				$($myBeer).on('click', function() {
// 					$(this).hide();
// 				
// 				});
// 				
// 				});	
// 	});
	function getBeer(response) {
       $(response.beers).each(function() {
				var $myLi = $('<div class="name">'+this.name+'</div><div class="info">'+this.description+'</div>');
				var $myBeer = $('');

					$("#example-beers").append($myLi);
				
				
				
				});	
				$('.name').on('click',function() {
						$(this).next('.info').slideToggle();
					});
				$('#next').on('click',function() {
					nextPage();
					$('#next').hide();
					});
				// $('.info').on('click', function() {
// 					$(this).hide();
// 				
// 				});
		
		
		
			
		
	}
	function nextPage() {
		$.ajax({
			url: "https://community-open-beer-database.p.mashape.com/beers.json?token=ddac556dd6acc6b3691d027fa09a2c37d07694f893cd358d8479056428b5c63c&order=name&page=2&per_page=25",
			dataType: 'json',
			type: 'GET',
			beforeSend: function (request)
			{
				request.setRequestHeader("X-Mashape-Key", 'JwWtvszT5GmshUmevuC6V6w8UVrfp1nkFAqjsntGBGWgU9ebJ1');
			},
			success: function (beer) {
				getBeer(beer);
			},

		});
	
			
	}		
	

});
