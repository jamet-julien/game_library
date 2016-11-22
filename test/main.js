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
    oGeometry     = null,
    handleMove    = null,
    handleClick   = null,
    handleDrag    = null,
    handleUp      = null,

    angle  = 0,
    mouseX = 0,
    mouseY = 0,

    oSpriteBall = Spritesheet.getInstance(
        "./img/balle.png",
        { grid : 2, width : 32, height: 32}
    ),

    oBall          = new Sprite( oSpriteBall),

    position       = new Vector( GAME.width/2, GAME.height/2),
    velocity       = new Vector( 0, 0),
    acceleration   = new Vector( 0, 0),
    rec            = new Vector( 20, 20),

    bClick          = false,

    oMouse         = new Vector( GAME.width/2, GAME.height/2),

    oNoise        = new Effect( function( R, G, B, A){

        /*
          var iValue = Perlin.value( this.x ,this.y),
              iColor = map( iValue, 0, 1, 0, 255);
        */
        var iColor = Math.round( ( R +  G + B) / 3),
            bruit  = map( Math.random(), 0, 1, 0, 50);

        if( A < 255){
          iColor = 255;
        }

        iColor = map( iColor + bruit, 50, 305, 0, 255);

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

          oGeometry = new Geometry( FOREGROUND);

          Timer.restart();

          this.setPhase( 'draw');



        },

        draw : function( iTime ){

          FOREGROUND.clear();

          oMouse         = new Vector( mouseX, mouseY),
          oMouse.sub( position);
          oMouse.magnetude = 0.2;

          acceleration = oMouse;

          velocity.add( acceleration)
          position.add( velocity);
          velocity.limit( 5);

          angle = oMouse.angle;

          oBall.rotAnim( FOREGROUND, position.x-16, position.y-16,angle - 225, [1]);

          oGeometry.rectangle( rec.x, rec.y, 32, 32)
                   .stroke('red', 5);


          oNoise.apply( FOREGROUND);



        }
    });

Timer.setCadence( 30)
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
handleMove = eventHandler( 'mousemove', {
  element  : document.getElementById('foreground'),
  callBack : function( e){

    mouseX = e.pageX - this.offsetLeft;
    mouseY = e.pageY - this.offsetTop;

  }
});

handleClick = eventHandler( 'mousedown', {
  element  : document.getElementById('foreground'),
  list     : [ rec],
  criteria : function( e){
    return (e.x) <= mouseX && (e.y) <= mouseY &&
           (e.x+32) >= mouseX && (e.y+32) >= mouseY;
  },
  callBack : function( e){

    handleDrag = eventHandler( 'mousemove', {
      element  : document.getElementById('foreground'),
      callBack : function( e){

        rec.x = mouseX - 16 ;
        rec.y = mouseY - 16 ;

      }
    });
  }
});

handleUp = eventHandler( 'mouseup', {
  element  : document.getElementById('foreground'),
  list     : [ rec],
  criteria : function( e){
    return (e.x) <= mouseX && (e.y) <= mouseY &&
           (e.x+32) >= mouseX && (e.y+32) >= mouseY;
  },
  callBack : function( e){

    handleDrag.destroy();
  }
});

document.onreadystatechange=function () {

  if (document.readyState === 'complete') {
    Timer.start();
  }

};
