				var MusicMix1 =[
					{	"Name": "Mix 1 Side A",
						"Genre": "Folk",
						"Artist":"Iron and Wine",
						"Songs":[ { "cover_art": "img/AW.jpg","album": "Around the Well", "track":[{"name": "Trapeze Swinger", "track_length": "9:31"}]}, 
								  { "cover_art": "img/TSD.jpg","album": "The Shepherd's Dog", "track": [{"name": "Flightless Bird, American Mouth", "track_length": "4:03"}]},
								  { "cover_art": "img/TSR.jpg","album": "The Sea and the Rhythm", "track": [{"name": "Someday The Waves", "track_length": "4:14"}]}
									]
					},
					
					{	"Name": "Side B",
						"Genre": "",
						"Artist":"Avett Brothers",
						"Songs":[ { "cover_art": "img/TG.jpg","album": "The Gleam", "track": [{"name": "Backwards With Time", "track_length": "2:38"}]}, 
								  { "cover_art": "img/ILY.jpg","album": "I and Love and You", "track": [{"name": "The Perfect Space", "track_length": "4:31"}]},
								  { "cover_art": "img/M.jpg","album": "Mignonette", "track": [{"name": "One Line Wonder", "track_length": "4:46"}]}
									]
					}
			];
			
				var MusicMix2 =[
					{	"Name": "Mix 2 Side A",
						"Genre": "Indie",
						"Artist":"Rogue Wave",
						"Songs":[ { "cover_art": "img/DLV.jpg","album": "Descended Like Vultures", "track":[{"name": "Bird on a Wire", "track_length": "3:40"},
																		         {"name": "Publish My Love", "track_length": "4:14"}
																				 ] 
								  },											 
								  { "cover_art": "img/OS.jpg","album": "Out of the Shadow", "track":[{"name": "Be Kind & Remind", "track_length": "2:36"}]} 
								]
					},
					
					{	"Name": "Side B",
						"Genre": "",
						"Artist":"Cass McCombs",
						"Songs":[ { "cover_art": "img/NTW.jpg","album": "Not the Way", "track": [{"name": "Opium Flower", "track_length": "6:03"}]}, 
								  { "cover_art": "img/C.jpg","album": "Catacombs", "track":[{"name": "The Executioner's Song", "track_length": "4:21"},
																   {"name": "Harmonia", "track_length": " 6:06"}
																   ]
								  },
								  { "cover_art": "img/HR.jpg","album": "Humor Risk", "track": [{"name": "Love Thine Enemy", "track_length": "3:56"}]}
							    ]
					}
			];
			
				var MusicMix3 =[
					{	"Name": "Mix 3 Side A",
						"Genre": "Rock",
						"Artist":"Band of Horses",
						"Songs":[ { "cover_art": "img/IA.jpg","album": "Infinite Arms", "track":[{"name": "On My Way Back Home", "track_length": "3:31"}]}, 
								  { "cover_art": "img/EAT.jpg","album": "Everything All The Time", "track":[{"name": "The Funeral", "track_length": "5:22"}]},
								  { "cover_art": "img/CB.jpg","album": "Cease To Begin", "track":[{"name": "No One's Gonna Love You", "track_length": "3:37"}]}
								  
									]
					},
					
					{	"Name": "Side B",
						"Genre": "",
						"Artist":"Creedence Clearwater Revival",
						"Songs":[ { "cover_art": "img/WPB.jpg","album": "Willy and the Poor Boys", "track":[{"name": "Down on the Corner", "track_length": "2:46"}]}, 
								  { "cover_art": "img/GR.jpg","album": "Green River", "track":[{"name": "Lodi", "track_length": "3:13"}]},
								  { "cover_art": "img/CF.jpg","album": "Cosmo's Factory", "track":[{"name": "Who'll Stop The Rain", "track_length": "2:28"},
																		 {"name": "Lookin' Out My Back Door", "track_length": "2:31"}
																		 ] }
									]
					}
			];
			
			
$(document).ready(function(){
			
		
				for(var i =0; i< MusicMix1.length; i++){
				
					$('section#Mixes').append('<a href=""><article class="MusicMix1-'+MusicMix1[i].Genre+'"></article></a>');
					//$('.MusicMix1-'+MusicMix1[i].Genre).append('<article class="songs '+music[i].Album[f].album_Classname+'"></article>');
					$('.MusicMix1-'+MusicMix1[i].Genre).append('<h3 style= "display: none;" class="Artist">'+MusicMix1[i].Artist+'</h3>');
					$('.MusicMix1-'+MusicMix1[i].Genre).prepend('<h1>'+MusicMix1[i].Genre+'</h1>');
					$('.MusicMix1-'+MusicMix1[i].Genre).prepend('<h1>'+MusicMix1[i].Name+'</h1>');
					$('.MusicMix1-'+MusicMix1[i].Genre).append('<ul class="More" ></ul>');
					for(var f=0; f< MusicMix1[i].Songs.length; f++){
						var text = '<li><img src="'+MusicMix1[i].Songs[f].cover_art+'"><p>'+MusicMix1[i].Songs[f].album+'</p>';
						for(var a=0; a<MusicMix1[i].Songs[f].track.length;a++){
						text+='<p>'+MusicMix1[i].Songs[f].track[a].name+'</p><p>'+MusicMix1[i].Songs[f].track[a].track_length+'</p></li>';
						}
						
						$('.MusicMix1-'+MusicMix1[i].Genre+' ul').append(text);
					}

				}
				
				for(var i =0; i< MusicMix2.length; i++){
				
					$('section#Mixes').append('<a href=""><article class="MusicMix2-'+MusicMix2[i].Genre+'"></article></a>');
					$('.MusicMix2-'+MusicMix2[i].Genre).append('<h3 style= "display: none;" class="Artist">'+MusicMix2[i].Artist+'</h3>');
					$('.MusicMix2-'+MusicMix2[i].Genre).prepend('<h1>'+MusicMix2[i].Genre+'</h1>');
					$('.MusicMix2-'+MusicMix2[i].Genre).prepend('<h1>'+MusicMix2[i].Name+'</h1>');
					$('.MusicMix2-'+MusicMix2[i].Genre).append('<ul class="More" ></ul>');

 
					for(var f=0; f< MusicMix2[i].Songs.length; f++){
						var text = '<li><img src="'+MusicMix2[i].Songs[f].cover_art+'"><p>'+MusicMix2[i].Songs[f].album+'</p>';
						for(var a=0; a<MusicMix2[i].Songs[f].track.length;a++){
						text+='<p>'+MusicMix2[i].Songs[f].track[a].name+'</p><p>'+MusicMix2[i].Songs[f].track[a].track_length+'</p></li>';
						}
						
						$('.MusicMix2-'+MusicMix2[i].Genre+' ul').append(text);
					}

				}
				
				for(var i =0; i< MusicMix3.length; i++){
				
					$('section#Mixes').append('<a href=""><article class="MusicMix3-'+MusicMix3[i].Genre+'"></article></a>');
					$('.MusicMix3-'+MusicMix3[i].Genre).append('<h3 style= "display: none;" class="Artist">'+MusicMix3[i].Artist+'</h3>');
					$('.MusicMix3-'+MusicMix3[i].Genre).prepend('<h1>'+MusicMix3[i].Genre+'</h1>');
					$('.MusicMix3-'+MusicMix3[i].Genre).prepend('<h1>'+MusicMix3[i].Name+'</h1>');
					$('.MusicMix3-'+MusicMix3[i].Genre).append('<ul class="More" ></ul>');
					for(var f=0; f< MusicMix3[i].Songs.length; f++){
						var text = '<li><img src="'+MusicMix3[i].Songs[f].cover_art+'"><p>'+MusicMix3[i].Songs[f].album+'</p>';
						for(var a=0; a<MusicMix3[i].Songs[f].track.length;a++){
						text+='<p>'+MusicMix3[i].Songs[f].track[a].name+'</p><p>'+MusicMix3[i].Songs[f].track[a].track_length+'</p></li>';
						}
						
						$('.MusicMix3-'+MusicMix3[i].Genre+' ul').append(text);
					}

				}
				
				/*function getImageUrl(img) {
                   var imageSrc = "imageName/imagePath.jpg";
				   if(text = imageSrc) { 
					  img.src = imageSrc;
					  img src="" id="myImage"
				}*/


});

$(function(){
$('a').click(function(e){
e.preventDefault(); //stop link from moving our user

//var h = $(this).children('article').children('ul').html(); //accessing our correct element via DOM tree
//alert(h); //alert to verify
var $a = $(this); //this as var
var $article = $a.children('article'); //article var
var $ul = $article.children('ul');  //ul var

if(!$a.hasClass('click')){ //if no click class
$a.addClass('click'); 
$ul.show('slow');
$article.height(600); //you could animate this or anything else here
}else{
$a.removeClass('click');
$ul.hide('fast');
$article.height(70);
}
});

});
		
		