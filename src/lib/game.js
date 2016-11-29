import Canvas          from '../class/canvas.js';
import Spritesheet     from '../class/spritesheet.js';
import Sprite          from '../class/sprite.js';
import Phase           from '../class/phase.js';
import Timer           from '../class/timer.js';
import Vector          from '../class/vector.js';
import Effect          from '../class/effect.js';
import Geometry        from '../class/geometry.js';
import Perlin          from '../class/perlin.js';
import eventHandler    from '../class/eventhandler.js';
import {indexToXY,
XYToIndex,
dedoublon,
contrain,
map,
shuffle} from './utility.js';


(function( context){

    context.Canvas       = Canvas;
    context.Spritesheet  = Spritesheet;
    context.Sprite       = Sprite;
    context.Phase        = Phase;
    context.Timer        = Timer;
    context.Effect       = Effect;
    context.Vector       = Vector;
    context.Geometry     = Geometry;
    context.Perlin       = Perlin;
    context.indexToXY    = indexToXY;
    context.XYToIndex    = XYToIndex;
    context.dedoublon    = dedoublon;
    context.contrain     = contrain;
    context.map          = map;
    context.shuffle      = shuffle;
    context.eventHandler = eventHandler;

})( window);
