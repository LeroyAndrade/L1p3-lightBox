const alleInformatie = document.querySelectorAll('.informatie');
const alleThumbs     = document.querySelectorAll('.thumb');


let alleInhoud =[];

for (let i=0; i < alleInformatie.length; i++){
  alleInhoud.pop(alleInformatie[i]);
  alleInformatie[i].remove();
}
