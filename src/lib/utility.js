export function indexToXY( index, mapWidth)
{
    var x = index % mapWidth;
    var y = Math.floor( index / mapWidth);
    return [x, y];
}

export function XYToIndex( x, y, mapWidth)
{
    return y * mapWidth + x;
}


export function contrain( iValue, iMin, iMax)
{
  return Math.max( Math.min( iValue, iMax), iMin);
}

export function map(  iValue,  repereMin, repereMax, scopeMin, scopeMax) {
  return ( ( iValue- repereMin) / (repereMax- repereMin) ) * ( scopeMax-scopeMin ) + scopeMin;
}
