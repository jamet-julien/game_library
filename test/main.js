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

    oSprite        = new Sprite( oSpritesheet, 10),
    oSprite2       = new Sprite( oSpritesheet2, 5),
    oSprite3       = new Sprite( oSpritesheet, 1),

    oPosition1     = new Vector( 0, 0),
    oVelocity1     = new Vector( 3, 0),
    oAcceleration1 = new Vector( 0.01, 0),

    oPosition2     = new Vector( 10, 0),
    oVelocity2     = new Vector( 4, 0),
    oAcceleration2 = new Vector( 0, 0),

    oEffect         = new Effect( function( R, G, B, A){

        return [ 255, 0, 0, A];
    }),

    oPhase         = new Phase('setup');

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

          oVelocity1.add( oAcceleration1);
          oPosition1.add( oVelocity1);

          oVelocity2.add( oAcceleration2);
          oPosition2.add( oVelocity2);

          GAME.clear();
          BACKGROUND.clear();
          FOREGROUND.clear();

          oPosition1.x %= GAME.width;
          oPosition1.y %= GAME.height;

          oPosition2.x %= GAME.width;
          oPosition2.y %= GAME.height;

          oSprite.rotAnim( BACKGROUND, 32, 32, 45,[1, 2, 3, 4]);
          oSprite2.draw( GAME, oPosition1.x, oPosition1.y, [1, 2, 3, 4]);
          oSprite3.draw( FOREGROUND, oPosition2.x, oPosition2.y,[1, 2, 3, 4]);


          oEffect.apply( GAME);
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
