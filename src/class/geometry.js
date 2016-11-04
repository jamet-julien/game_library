


class Geometry{


  constructor( oContext){
    this.context = oContext.context;
    this.begin   = false;
  }

  /**
   *
   */
  beginPath(){

    if( !this.begin){
      this.context.beginPath();
      this.begin = true;
    }else{
      this.closePath()
          .beginPath();
    }

    return this;
  }

  /**
   *
   */
  closePath(){

    this.context.closePath();
    this.begin = false;

    return this;
  }

  /**
   *
   */
  moveTo( iX, iY){
      this.context.moveTo( iX, iY);
      return this;
  }

  /**
   * [fillStyle description]
   * @param  {[type]} mValue [description]
   * @return {[type]}        [description]
   */
  fill( mValue){

    this.context.fillStyle = mValue;
    this.context.fill();

    return this;
  }

  /**
   *
   */
  stroke( mValue, iSize){

      if( iSize){
        this.context.lineWidth = iSize;
      }

      if( mValue){
        this.context.strokeStyle = mValue;
      }

      this.context.stroke();

      return this;
  }

  /**
   *
   */
  rectangle( iX,iY, iWidth, iHeight){

    this.beginPath();
    this.context.rect( iX, iY, iWidth, iHeight);

    return this;
  }

  /**
   *
   */
  circle( iX, iY, iSize){

    this.beginPath();
    this.context.arc( iX, iY, iSize, 0, 2 * Math.PI, false);

    return this;
  }


  polygon( aPoint){
    var i       = 1,
        iLenght = aPoint.length;

    this.beginPath()
        .moveTo( aPoint[0][0], aPoint[0][1]);

    for(; i < iLenght ; i++ ){
      this.lineTo( aPoint[i][0], aPoint[i][1]);
    }

    this.closePath();

    return this;
  }

  /**
   *
   */
  point( iX,iY){
    return this.rectangle( iX,iY, 1, 1);
  }

  /**
   *
   */
  lineTo( iX, iY){
      this.context.lineTo( iX, iY);
      return this;
  }

}


export default Geometry;
