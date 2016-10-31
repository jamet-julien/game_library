

class Effect{

  /**
   *
   */
  constructor( oCallback){
    this.callBack = oCallback || function( R, G, B, A){
        return [ R, G, B, A]
    };
  }

  /**
   *
   */
  apply( oCtx){
    let oImageData = oCtx.getPixel(),
        iLength    = oImageData.data.length,
        j          = 0,
        aResult    = [];

    for( ; j < iLength; j +=4 ){

        aResult = this.callBack.call(
                    this,
                    oImageData.data[ j + 0],
                    oImageData.data[ j + 1],
                    oImageData.data[ j + 2],
                    oImageData.data[ j + 3]
                );

      oImageData.data.set( aResult, j);

    }
    oCtx.setPixel( oImageData);
  }


}


export default Effect;
