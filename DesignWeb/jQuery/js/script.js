$(document).ready(function () {
	$("#court").hide();
	$("#long").hide();
	$("#profile").show();
	$("#profile1").hide();
	$("#profile2").hide();
	$("#profile3").hide();

	$("#mot").keyup(function longueur() {
		var mot = $('#mot').val().length;
		if (mot>12) {
			$("#long").show();
			$("#court").hide();
		}
		else if (mot<3){
			$("#court").show();
			$("#long").hide();
		}
		else {
			$("#long").hide();
			$("#court").hide();
		}
	});
});

//Bouton
//Thanks Samichou
$(function() {
	$("form").submit(function() { return false; });
});
$(document).on('keypress',function(e) {
	if(e.which === 13) {
		$('#send').click()
	}
});
$(".btn").click(function valeur().toUpperCase(){
	var value=$('#mot').val();
	//Value = la lettre
	var length=value.length;
	for (i=0; i<length[i];i++) {
		length[i] = value[i];
		if (value[i]==="*"){
			value[i]="=";
			return(value[i]);
		}
	}

	$('#profile').html("");
	if (length<=12 && length>=7){
		for (i=0;i<value.length;i++){
			$('#profile').append("<div class=\"col-1 px-2\"><img src=\"Letters/"+value[i]+"/"+value[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
		}

	}
	else if (length<=6 && length>=5){
		for (i=0;i<value.length;i++){
			$('#profile').append("<div class=\"col-2 px-2\"><img src=\"Letters/"+value[i]+"/"+value[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
		}}
	else if (length===4){
		for (i=0;i<value.length;i++){
			$('#profile').append("<div class=\"col-3 px-2\"><img src=\"Letters/"+value[i]+"/"+value[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
		}}
	else if (length===3){
		for (i=0;i<value.length;i++){
			$('#profile').append("<div class=\"col-4 px-2\"><img src=\"Letters/"+value[i]+"/"+value[i]+"1.jpg\" height=\"100%\" width=\"100%\"/></div>");
		}}
});

//Couleurs
var input=$('#inputState').val();
$( "#inputState" ).change(function() {
	input=Number($('#inputState').val());
	if (input===0){
		$('#profile').removeClass('bg1 bg2 bg3 bg4 bg5 bg6').addClass('bg');
	}
	else if (input===1){
		$('#profile').removeClass('bg bg2 bg3 bg4 bg5 bg6').addClass('bg1');
	}
	else if (input===2){
		$('#profile').removeClass('bg bg1 bg3 bg4 bg5 bg6').addClass('bg2');
	}
	else if (input===3){
		$('#profile').removeClass('bg bg2 bg1 bg4 bg5 bg6').addClass('bg3');
	}
	else if (input===4){
		$('#profile').removeClass('bg bg2 bg3 bg bg5 bg6').addClass('bg4');
	}
	else if (input===5){
		$('#profile').removeClass('bg bg2 bg3 bg4 bg bg6').addClass('bg5');
	}
	else if (input===6){
		$('#profile').removeClass('bg bg2 bg3 bg4 bg5 bg1').addClass('bg6');
	}
});















