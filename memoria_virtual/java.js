
function show(target, x) {

	var vet_popup_externo = document.getElementsByClassName("popup_externo");
    var vet_per = document.getElementsByClassName("per");
    var vet_res = document.getElementsByClassName("res");
    var vet_resposta = document.getElementsByClassName("resposta");
    var vet_voltar = document.getElementsByClassName("voltar");

	vet_per[x].style.display = 'block';
	vet_res[x].style.display = 'none';
	vet_resposta[x].style.display = 'block';
	vet_voltar[x].style.display = 'none';
	vet_popup_externo[x].style.display = 'none';

	var vetor = document.getElementsByClassName(target);

	for (var i = 0; i < vetor.length; i++) {
		vetor[i].style.display = 'block';
	}   
}

function hide(target, x) {

    var vetor = document.getElementsByClassName(target);

    for (var i = 0; i < vetor.length; i++) {
    	vetor[i].style.display = 'none';
    }

    var vet_popup_externo = document.getElementsByClassName("popup_externo");
    var vet_per = document.getElementsByClassName("per");
    var vet_res = document.getElementsByClassName("res");
    var vet_resposta = document.getElementsByClassName("resposta");
    var vet_voltar = document.getElementsByClassName("voltar");
    
    vet_popup_externo[x].style.display = 'block';


}

function resposta(x){

	var vet_per = document.getElementsByClassName("per");
    var vet_res = document.getElementsByClassName("res");
    var vet_resposta = document.getElementsByClassName("resposta");
    var vet_voltar = document.getElementsByClassName("voltar");

	vet_per[x].style.display = 'none';
	vet_res[x].style.display = 'block';
	vet_resposta[x].style.display = 'none';
	vet_voltar[x].style.display = 'block';
	

}