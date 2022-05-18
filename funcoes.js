
var imagens = ["imagens/slide1.jpg", "imagens/slide2.jpg", "imagens/slide3.jpg", "imagens/slide4.jpg", "imagens/slide5.jpg", "imagens/slide6.jpg"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 6;
document.querySelector('.gif img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);

$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});