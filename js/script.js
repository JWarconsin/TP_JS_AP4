const characters = document.querySelector('.characters');

loadData();

async function loadData(type = 'all') {
  const reponse = await fetch('https://hp-api.onrender.com/api/characters');

  const listCharacters = await reponse.json();

  let newListCharacters =
    type!== 'all'
     ? listCharacters.filter(character => character.house === type)
     : listCharacters;
  for (let i = 0; i < 8; i++) {
    let character = newListCharacters[i];
    let div = document.createElement('div');

    div.innerHTML = 
     `<div class="character">
        
        <img style="width: 150px; height: 150px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 150px; margin-top: 55px; margin-right: 30px;object-fit: cover; border: 8px #B99049 solid" src="${character.image} " />

        <h2>${character.name}</h2>
      </div>`
    ;
    characters.appendChild(div);
  }

}