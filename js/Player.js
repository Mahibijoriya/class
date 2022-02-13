class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;
// if the player is the fist to join the positions be width/2-100
    if (this.index === 1) {
      this.positionX = width / 2 - 100;
      //any other player would have a different position
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      //in the database the name would be filled with the one in the form
     name: this.name,
     // in the database bothe x and y positions would be noted
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  getCount() {
    //shows how many players are in the game in the database
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    //updates the database when a new player joins
    database.ref("/").update({
      playerCount: count
    });
  }

  static getPlayersInfo() {
    //puts the player info into the database
    var playerInfo = database.ref("players");
    playerInfo.on("value",data=>{allPlayers=data.val()});
    
  }
}
