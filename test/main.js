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
    oSpritesheet  = Spritesheet.getInstance(
        "./img/dog.png",
        { grid : 8, width : 32, height: 32}
    ),
    oSpritesheet2 = Spritesheet.getInstance(
        "./img/dog.png",
        { grid : 8, width : 32, height: 32}
    ),
    oSprite       = new Sprite( oSpritesheet, 10),
    oSprite2      = new Sprite( oSpritesheet2, 5),
    oSprite3      = new Sprite( oSpritesheet, 1),

    oLocation     = new Vector( 0, 0),
    oVelocity     = new Vector( 3, 0),
    oAcceleration = new Vector( 0, 0),
    
    oPhase        = new Phase('setup');

/***********************************************
  ____  _____ _____ _   _ ____
 / ___|| ____|_   _| | | |  _ \
 \___ \|  _|   | | | | | | |_) |
  ___) | |___  | | | |_| |  __/
 |____/|_____| |_|  \___/|_|

 ***********************************************/

    oPhase.computePhase({

        setup : function( iTime){

          GAME.init();
          BACKGROUND.init();
          FOREGROUND.init();

          Timer.restart();
          this.setPhase( 'draw');

        },

        draw : function( iTime ){

          oVelocity.add( oAcceleration);
          oLocation.add( oVelocity);

          GAME.clear();
          BACKGROUND.clear();
          FOREGROUND.clear();

          if( oLocation.x > GAME.width){
            oLocation.x = 0;
          }

          if( oLocation.y > GAME.height){
            oLocation.y = 0;
          }

          oSprite.rotAnim( BACKGROUND, 32, 32, 45,[1, 2, 3, 4]);
          oSprite2.draw( GAME, oLocation.x, oLocation.y, [1, 2, 3, 4]);
          oSprite3.draw( FOREGROUND, 32, 99,[1, 2, 3, 4]);

        }
    });

Timer.setCadence( 24)
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


document.onreadystatechange=function () {

  if (document.readyState === 'complete') {
    Timer.start();
  }

};
