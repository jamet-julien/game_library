/***********************************
 __     ___    ____  ___    _    ____  _     _____
 \ \   / / \  |  _ \|_ _|  / \  | __ )| |   | ____|
  \ \ / / _ \ | |_) || |  / _ \ |  _ \| |   |  _|
   \ V / ___ \|  _ < | | / ___ \| |_) | |___| |___
    \_/_/   \_\_| \_\___/_/   \_\____/|_____|_____|

************************************/

var BACKGROUND    = new Canvas( "background", 640, 480 ),
    GAME          = new Canvas( "game", 640, 480 ),
    FOREGROUND    = new Canvas( "foreground", 640, 480 ),
    oGeometry       = null,

/*
    angle = 0,
    mouseX = 0,
    mouseY = 0,

    oSpriteBall = Spritesheet.getInstance(
        "./img/balle.png",
        { grid : 2, width : 32, height: 32}
    ),

    oBall          = new Sprite( oSpriteBall),
    oBall2         = new Sprite( oSpriteBall),

    position       = new Vector( GAME.width/3, GAME.height/3),
    velocity       = new Vector( 0, 0),
    acceleration   = new Vector( 0, 0),

    bClick          = false,

    position2       = new Vector( GAME.width/6, GAME.height/6),
    velocity2       = new Vector( 0, 0),
    acceleration2   = new Vector( 0, 0),

    oMouse         = new Vector( GAME.width/2, GAME.height/2),
*/
    oNoise        = new Effect( function( R, G, B, A){

        var iValue = Perlin.value( this.x ,this.y),
            iColor = map( iValue, 0, 1, 0, 255);

        return [ iColor, iColor, iColor, 255];
    }),

    oPhase         = new Phase('setup');

/***********************************************
  ____  _____ _____ _   _ ____
 / ___|| ____|_   _| | | |  _ \
 \___ \|  _|   | | | | | | |_) |
  ___) | |___  | | | |_| |  __/
 |____/|_____| |_|  \___/|_|

 ***********************************************/
Perlin.resolution = 100;

    oPhase.computePhase({

        setup : function( iTime){

          BACKGROUND.init();
          GAME.init();
          FOREGROUND.init();

          Timer.restart();

          this.setPhase( 'draw');



        },

        draw : function( iTime ){

          FOREGROUND.clear();
          oNoise.apply( FOREGROUND);



        }
    });

Timer.setCadence( 10)
     .run( ( iTime) => {
        oPhase.run( iTime);
      }).play();

/***************************************
  ____ _____  _    ____ _____
 / ___|_   _|/ \  |  _ \_   _|
 \___ \ | | / _ \ | |_) || |
  ___) || |/ ___ \|  _ < | |
 |____/ |_/_/   \_\_| \_\|_|

****************************************/
document.getElementById('foreground').addEventListener("mousemove", function( e){
  mouseX = e.pageX - this.offsetLeft;
  mouseY = e.pageY - this.offsetTop;
});

document.onreadystatechange=function () {

  if (document.readyState === 'complete') {
    Timer.start();
  }

};
