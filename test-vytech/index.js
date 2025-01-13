function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    calculerSomme(contents);
  };
  reader.readAsText(file);
}

const calculerSomme = contents => {
  var sommeTotale = 0;
  var contentArray = contents.split("\n");

  contentArray.forEach(ligne => {
    let numbers = ligne.match(/\d+/g);
    if (numbers) {
      const premierChiffre = numbers[0][0]; 
      const listDernierChiffre = numbers[numbers.length - 1]; 
      const dernierChiffre = listDernierChiffre[listDernierChiffre.length - 1]; 
      const val = premierChiffre + dernierChiffre; 
      sommeTotale = sommeTotale + Number(val); 
    }
  });

  
  document.getElementById("resultat").textContent = "Somme finale : " + sommeTotale;
};

document.getElementById('file-input').addEventListener('change', readSingleFile);
