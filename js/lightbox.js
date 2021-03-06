const alleInformatie = document.querySelectorAll('.informatie');
const alleThumbs     = document.querySelectorAll('.thumb');


let alleInhoud =[];

for (let i=0; i < alleInformatie.length; i++){
  alleInhoud.push(alleInformatie[i]);
  alleInformatie[i].remove();
}


function verwijderModaal(){
document.getElementById('modaal').remove();
}

function maakModaal(num){
  console.log(alleInformatie[num]);

  //Voeg een div toe met de class 'modaal', wanneer je op alleInformatie.num klikt
  //maak het volgende element aan met de type: 'div'
let modaal = document.createElement('section');
  //die div moet je een class geven en id om later meer vrijheid te krijgen op inhoud, dus: ='modaal'
  modaal.className= 'modaal';
  modaal.id= 'modaal';

  //Je roept modaal op, in de body, daar voeg je binnen het modaal, de alleInhoud[i] toe.
  //dit moet worden toegevoegd onderaan de DOM body, creëer Element, dus:


    //definiëer variabel
let modaalContainer = document.createElement('article');

      //voeg class toe
        modaalContainer.className= 'modaal-container';

        //vertel dat het nummer van de geklikte inhoud, wordt getoond
            //Geef de waarde aan die zal verschijnen wanneer de modaal is aangemaakt
        modaalContainer.innerHTML = alleInhoud[num].innerHTML;

//Creëer verwijder knop in het open verschenen artikel
        let sluitKnop = document.createElement('i');
            sluitKnop.className = 'closeAllign';
        modaalContainer.prepend(sluitKnop);
        modaal.append(modaalContainer);

//eventListener klik op sluit button (door middel van css aangemaakt)
sluitKnop.addEventListener('click', verwijderModaal)


//EventListener klik op modaal
        modaal.addEventListener('click', verwijderModaal);
        //wanneer de modaalContainer open staat met de tekst en je er op klikt mag het modaal niet worden gesloten
        //alleen wanneer je op modaal klikt mag de klik worden doorgegeven
/*Delete modaal, wanneer het is geopend en je buiten het modaalContainer klikt*/
        modaalContainer.addEventListener('click', function(e){
          e.stopPropagation();
        });

//Roep alles op
document.body.append(modaal);
}

for(let i=0; i < alleThumbs.length; i++){
  alleThumbs[i].addEventListener('click', function(){
    maakModaal(i)
  });
}
