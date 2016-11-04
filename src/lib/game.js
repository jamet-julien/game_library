import Canvas      from '../class/canvas.js';
import Spritesheet from '../class/spritesheet.js';
import Sprite      from '../class/sprite.js';
import Phase       from '../class/phase.js';
import Timer       from '../class/timer.js';
import Vector      from '../class/vector.js';
import Effect      from '../class/effect.js';
import Geometry    from '../class/geometry.js';


(function( context){

    context.Canvas      = Canvas;
    context.Spritesheet = Spritesheet;
    context.Sprite      = Sprite;
    context.Phase       = Phase;
    context.Timer       = Timer;
    context.Effect      = Effect;
    context.Vector      = Vector;
    context.Geometry    = Geometry;

})(window);
