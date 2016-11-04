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

    angle = 0,
    mouseX = 0,
    mouseY = 0,

    /*

    oSpritesheet  = Spritesheet.getInstance(
      "./img/dog.png",
      { grid : 8, width : 32, height: 32}
    ),
    oSprite        = new Sprite( oSpritesheet, 10),
    oPosition1     = new Vector( 0, 0),
    oVelocity1     = new Vector( 3, 0),
    oAcceleration1 = new Vector( 0.01, 0),

    oSpritesheet2 = Spritesheet.getInstance(
      "./img/dog.png",
      { grid : 8, width : 32, height: 32}
    ),
    oSprite2       = new Sprite( oSpritesheet2, 5),
    oPosition2     = new Vector( 10, 0),
    oVelocity2     = new Vector( 4, 0),
    oAcceleration2 = new Vector( 0, 0),

    oSprite3       = new Sprite( oSpritesheet, 1),
    */

    oSpriteBall = Spritesheet.getInstance(
        "./img/balle.png",
        { grid : 2, width : 32, height: 32}
    ),

    oBall          = new Sprite( oSpriteBall),
    oBall2         = new Sprite( oSpriteBall),

    position       = new Vector( GAME.width/3, GAME.height/3),
    velocity       = new Vector( 0, 0),
    acceleration   = new Vector( 0, 0),

    oGeometry       = null,

    position2       = new Vector( GAME.width/6, GAME.height/6),
    velocity2       = new Vector( 0, 0),
    acceleration2   = new Vector( 0, 0),

    oMouse         = new Vector( GAME.width/2, GAME.height/2),

    oEffect        = new Effect( function( R, G, B, A){

        return ( this.y % 2 === 0)? [ R, G, B, A] : [255, 0, 0, A];
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

          BACKGROUND.init();
          GAME.init();
          FOREGROUND.init();

          oGeometry = new Geometry( FOREGROUND);



          Timer.restart();
          this.setPhase( 'draw');

        },

        draw : function( iTime ){

          BACKGROUND.clear();
          GAME.clear();
          FOREGROUND.clear();

          oGeometry.rectangle(10, 10, 150, 150)
                   .stroke( 'green', 5)
                   .fill( 'red');

         oGeometry.rectangle(100, 100, 150, 150)
                  .stroke( 'green', 5);

        oGeometry.polygon([[150, 150], [200, 150], [175, 200]])
                 .stroke( 'yellow', 5).fill( 'orange');


          oMouse  = new Vector( mouseX, mouseY);
          oMouse.sub( position);
          oMouse.magnetude =  0.1;

          acceleration = oMouse;


          velocity.add( acceleration);
          position.add( velocity);
          velocity.limit( 5);

          angle = oMouse.angle;

          oBall.rotAnim( GAME, position.x - 16, position.y - 16, angle - 225, [0]);

          oMouse  = new Vector( mouseX, mouseY);
          oMouse.sub( position2);

          oMouse.magnetude =  0.2;

          acceleration2 = oMouse;

          velocity2.add( acceleration2);
          position2.add( velocity2);
          velocity2.limit( 5);

          angle = oMouse.angle;

          oBall2.rotAnim( FOREGROUND, position2.x - 16, position2.y - 16, angle - 225, [1]);

          //oEffect.apply( FOREGROUND);// WARNING LAG
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
