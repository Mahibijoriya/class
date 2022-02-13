class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
   //create the sprite
    car1=createSprite(width/2-50,height-100);
    //make the sprite show as an image
    car1.addImage("car1",car1_img)
    //set the size
    car1.scale=0.07;
    //create the second car
    car2=createSprite(width/2+100,height-100);
    //add the image to the car
    car2.addImage("car2",car2_img)
    //set the size of the car
    car2.scale=0.07;
    //create an array called cars with towo values, car1, and car2 inside
    cars=[car1,car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    //when the gamestate is in play the form would dissapear
   this.handleElements();
   //shows the information gathered on the player
   Player.getPlayersInfo();
   //if their are players in the game an image should show
   if(allPlayers!==undefined){
     image(track,0,-height*5,width,height*6);
     drawSprites();
   }
  }
}
