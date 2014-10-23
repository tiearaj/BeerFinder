$(function() {
	$.ajax({
            url: "https://community-open-beer-database.p.mashape.com/beers.json?token=ddac556dd6acc6b3691d027fa09a2c37d07694f893cd358d8479056428b5c63c&order=name",
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
		
	/*$.getJSON("http://api.openbeerdatabase.com/v1/breweries.json?callback=?", function(response) {
		$(response.breweries).each(function() {
			$("#example-breweries").append($("<li>", { text : this.name}));
		});
		
	});*/
	$.getJSON("http://api.openbeerdatabase.com/v1/beers.json?callback=?", function(response) {
				$(response.beers).each(function() {
				var $myLi = $('<li class="name">'+this.name+'</li>');
				var $myBeer = $('<div class="info">'+this.description+'</div>');

					$("#example-beers").append($myLi);
				
				$($myLi).on('click',function() {
						$(this).append($myBeer);
					});
				$($myBeer).on('click', function() {
					$(this).hide();
				});
				
				});	
	});
	/*function getBeer(beer) {
        for(var i=0; i<beer.length; i++) {
		var beer=$(this).attr('id');
			
					
		}
	}*/	
	

});
