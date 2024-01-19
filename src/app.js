const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

// Player Class
class Player {
  constructor(id, name, type) {
    // Progression 1: Create member variables and assign values
    this.id = id;
    this.name = name;
    this.image = 'images/super-' + (id +1) + '.png';
    this.strength = this.getRandomStrength();
    this.type = type;
    this.selected = false;
    
  }
  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying

    // Accumulate HTML template
    // Type your code here
    view = () => {
      const player = document.createElement('div');
      player.className = `player ${this.selected ? 'selected' : ''}`;
      player.setAttribute('data-id', this.id);
  
      player.innerHTML = `<img src="${this.image}"><div>${this.name}</div><div class="strength">${this.strength}</div>`;
  
      return player;
  };

  }
    
    

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = [];
    let counter = 0;

    players.forEach((player, i) => {
        let type = counter % 2 === 0 ? 'hero' : 'villain';
        this.players.push(new Player(i, player, type));
        counter++;
});
   
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}
